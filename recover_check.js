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
                        
                        try {
                            target = JSON.parse(chunk.TargetContent);
                            replacement = JSON.parse(chunk.ReplacementContent);
                        } catch (e) { }
                        
                        if (files[targetFile].includes(target)) {
                            files[targetFile] = files[targetFile].replace(target, replacement);
                            // console.log(`Applied patch to ${targetFile}`);
                        } else {
                            // Let's check if the current file ALREADY has the replacement content.
                            // If it does, then the patch is already applied/superseded.
                            if (files[targetFile].includes(replacement)) {
                                // Already has it
                            } else {
                                console.log(`\n\n--- FAILED TO APPLY (NOT FOUND & REPLACEMENT NOT IN FILE) ---`);
                                console.log(`File: ${targetFile}`);
                                console.log(`Instruction: ${args.Instruction}`);
                                console.log(`Target Preview: ${target.substring(0, 100)}...`);
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
    }
}
