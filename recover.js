const fs = require('fs');
const path = require('path');

const logPath = '/Users/Sujay/.gemini/antigravity-ide/brain/b98e6b3a-d877-4015-a520-2f40c7c724a8/.system_generated/logs/transcript.jsonl';
const transcript = fs.readFileSync(logPath, 'utf8').split('\n').filter(Boolean);

let files = {};

for (const line of transcript) {
    try {
        const step = JSON.parse(line);
        if (step.tool_calls) {
            for (const call of step.tool_calls) {
                if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
                    const args = call.args;
                    let targetFile = args.TargetFile;
                    if (!targetFile) continue;
                    
                    targetFile = targetFile.replace(/^"|"$/g, '');
                    
                    if (!files[targetFile]) {
                        if (fs.existsSync(targetFile)) {
                            files[targetFile] = fs.readFileSync(targetFile, 'utf8');
                        } else {
                            continue;
                        }
                    }
                    
                    let chunks = [];
                    if (call.name === 'replace_file_content') {
                        chunks = [args];
                    } else if (call.name === 'multi_replace_file_content') {
                        chunks = typeof args.ReplacementChunks === 'string' ? JSON.parse(args.ReplacementChunks) : args.ReplacementChunks;
                    }
                    
                    for (const chunk of chunks) {
                        let target = chunk.TargetContent;
                        if (typeof target === 'string') target = target.replace(/^"|"$/g, '').replace(/\\n/g, '\n').replace(/\\"/g, '"');
                        let replacement = chunk.ReplacementContent;
                        if (typeof replacement === 'string') replacement = replacement.replace(/^"|"$/g, '').replace(/\\n/g, '\n').replace(/\\"/g, '"');
                        
                        // We actually just use the target to find and replace. But the logged TargetContent has escaped quotes in the JSON string representation, which might be tricky if it was double JSON encoded.
                        // Wait, the arguments to the tool calls in `transcript.jsonl` are stringified JSON inside the string!
                        // e.g. "TargetContent": "\"import \\\"@pnp/sp/site-users/web\\\";\\nimport \\\"@pnp/graph/users\\\";\""
                        // This means `chunk.TargetContent` is a JSON string of a string!
                        // Let's parse it as JSON to get the real string.
                        try {
                            target = JSON.parse(chunk.TargetContent);
                            replacement = JSON.parse(chunk.ReplacementContent);
                        } catch (e) {
                            // If it fails, maybe it wasn't double encoded.
                        }
                        
                        if (files[targetFile].includes(target)) {
                            files[targetFile] = files[targetFile].replace(target, replacement);
                            console.log(`Applied patch to ${targetFile}`);
                        } else {
                            // sometimes only a partial match is possible because previous patches might have shifted things.
                            console.log(`Failed to find target in ${targetFile}`);
                        }
                    }
                }
            }
        }
    } catch (e) {
        // console.error(e);
    }
}

for (const file in files) {
    fs.writeFileSync(file, files[file]);
    console.log(`Saved recovered file: ${file}`);
}
