import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react';

require('../assets/style.css');

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div id='Home'>
        <section className="hero">
          <div className="tagline">✨ Pioneering Digital Excellence</div>
          <h1>Innovating the <span>Future Together</span></h1>
          <p>
            We are a forward-thinking team dedicated to creating exceptional
            digital experiences and cutting-edge solutions that drive success.
          </p>
          {/* <div className="buttons">
      <a href="#" className="btn btn-primary">Discover Our Work →</a>
      <a href="#" className="btn btn-secondary">▶ Watch Demo</a>
    </div> */}
          <div className="scroll-indicator"></div>
        </section>
        <div className='Pagecontainer'> 
           <div className='Quicklinks' style={{marginTop:'25px'}}>
          {/* <h2 className='webheaders'>Quick Links</h2> */}

          <div className='Quicklinkswrapper'>

            <a href="http://">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/digital.png')} />
                <p>Employee Tools</p>
              </div>
            </a>
            <a href="http://">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/product.png')} />
                <p>Operation & Workflow</p>
              </div>
            </a>
            <a href="http://">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/capability.png')} />
                <p>Safety & Compliance</p>
              </div>
            </a>
            <a href="http://">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/goal.png')} />
                <p>Updates</p>
              </div>
            </a>
          </div>
        </div>

          <section className="about-section">
            <div className="badge"><i className="fas fa-users"></i> Meet Our Team</div>
            <h2>About Our Team</h2>
            <p>
              We are a passionate team of innovators, designers, and engineers committed to pushing the
              boundaries of what's possible in technology and design.
            </p>

            <div className="stats-container">
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>200+</h3>
                <p>Global Clients</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
          </section>


          <section className="solutions-section">
            <div className="solutions-container">
              <div className="solutions-text">
                <h2>Building Tomorrow's<br />Solutions Today</h2>
                <p>
                  Our diverse team combines expertise across multiple disciplines to deliver innovative
                  solutions that exceed expectations. From concept to deployment, we're with you every step of the way.
                </p>
                <p>
                  We believe in the power of collaboration, continuous learning, and staying ahead of
                  industry trends to provide our clients with cutting-edge solutions.
                </p>
              </div>

              <div className="solutions-stats">
                {/* <div className="stat-card">
          <span className="green">24/7</span>
          Support
        </div>
        <div className="stat-card">
          <span className="blue">100%</span>
          Quality
        </div>
        <div className="stat-card">
          <span className="purple">15+</span>
          Countries
        </div>
        <div className="stat-card">
          <span className="gold">5★</span>
          Rating
        </div> */}
                <img src={require('../assets/officebg.jpg')} />
              </div>
            </div>
          </section>


        </div>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p className="subtitle">
            Empowering businesses through innovative technology solutions that create lasting
            impact and drive meaningful change.
          </p>

          <div className="mission-cards">
            <div className="mission-card">
              <i className="fas fa-bullseye"></i>
              <h3>Precision</h3>
              <p>
                We deliver solutions with meticulous attention to detail, ensuring every project
                meets the highest standards of excellence.
              </p>
            </div>
            <div className="mission-card">
              <i className="fas fa-heart"></i>
              <h3>Passion</h3>
              <p>
                Our team is driven by genuine enthusiasm for technology and a commitment to making
                a positive difference in the world.
              </p>
            </div>
            <div className="mission-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>
                We constantly explore new technologies and approaches to provide cutting-edge
                solutions that stay ahead of the curve.
              </p>
            </div>
          </div>

          <p className="mission-quote">
            "We believe technology should serve humanity, not the other way around.
            Our mission is to create solutions that enhance lives and empower businesses
            to achieve their full potential."
          </p>

          <div className="circle small"></div>
          <div className="circle large"></div>
        </section>

        <div className='Pagecontainer'>
          <section className="capabilities-section">
            <div className="badge"><i className="fas fa-cogs"></i> What We Do</div>
            <h2>Our Capabilities</h2>
            <p className="subtitle">
              Comprehensive expertise across the full spectrum of modern technology solutions that drive
              innovation and deliver exceptional results.
            </p>

            <div className="capabilities-grid">

              <div className="capability-card">
                <div className="icon"> <img src={require('../assets/team.png')} /> </div>
                <h3>Data Solutions</h3>
                <p>Comprehensive data management, analytics, and business intelligence solutions.</p>
                <ul>
                  <li>Database Design</li>
                  <li>Data Analytics</li>
                  <li>ETL Processes</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>Cloud Infrastructure</h3>
                <p>Scalable, secure cloud solutions and DevOps practices for modern applications.</p>
                <ul>
                  <li>AWS & Azure</li>
                  <li>CI/CD Pipelines</li>
                  <li>Containerization</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>Cybersecurity</h3>
                <p>Advanced security measures to protect your applications and data from threats.</p>
                <ul>
                  <li>Security Audits</li>
                  <li>Penetration Testing</li>
                  <li>Compliance</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>Business Intelligence</h3>
                <p>Transform your data into actionable insights with advanced analytics and reporting.</p>
                <ul>
                  <li>Dashboard Creation</li>
                  <li>Data Visualization</li>
                  <li>Predictive Analytics</li>
                </ul>
              </div>

            </div>
          </section>


          <section className="tech-section">
            <div className="badge">⚡ Our Technology Stack</div>
            <h2>Tech Radar</h2>
            <p className="subtitle">
              Our technology stack and tools that power innovation and drive exceptional results across every project we deliver.
            </p>

            <div className="tech-grid">

              <div className="tech-card">
                <h3>Backend</h3>
                <div className="tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">Python</span>
                  <span className="tag">Go</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Redis</span>
                  <span className="tag">GraphQL</span>
                </div>
              </div>

              <div className="tech-card">
                <h3>Cloud & DevOps</h3>
                <div className="tags">
                  <span className="tag">AWS</span>
                  <span className="tag">Azure</span>
                  <span className="tag">Docker</span>
                  <span className="tag">Kubernetes</span>
                  <span className="tag">Terraform</span>
                  <span className="tag">GitHub Actions</span>
                </div>
              </div>


              <div className="tech-card">
                <h3>AI & Data</h3>
                <div className="tags">
                  <span className="tag">TensorFlow</span>
                  <span className="tag">PyTorch</span>
                  <span className="tag">OpenAI</span>
                  <span className="tag">Apache Spark</span>
                  <span className="tag">Elasticsearch</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
          </section>


          <section className="products-section">
            <div className="badge">⚙️ Our Solutions</div>
            <h2>Our Products</h2>
            <p className="subtitle">
              Innovative software solutions designed to solve complex business challenges and accelerate digital transformation for companies worldwide.
            </p>

            <div className="product-grid">
              <div className="product-card">
                <div className="icon">⚡</div>
                <span className="status popular">Popular</span>
                <h3>DataFlow Pro</h3>
                <div className="category">Data Analytics</div>
                <p>Advanced data pipeline management and analytics platform for enterprise-scale data processing.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Real-time Processing</li>
                    <li>Auto-scaling</li>
                    <li>Custom Dashboards</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>

              <div className="product-card">
                <div className="icon">🛡️</div>
                <span className="status new">New</span>
                <h3>SecureVault</h3>
                <div className="category">Security</div>
                <p>Comprehensive cybersecurity solution with threat detection, prevention, and incident response.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>24/7 Monitoring</li>
                    <li>AI Threat Detection</li>
                    <li>Compliance Ready</li>
                    <li>Multi-factor Auth</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>

              <div className="product-card">
                <div className="icon">🌐</div>
                <span className="status enterprise">Enterprise</span>
                <h3>CloudConnect</h3>
                <div className="category">Cloud Solutions</div>
                <p>Seamless cloud migration and management platform with automated deployment pipelines.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Multi-cloud Support</li>
                    <li>Cost Optimization</li>
                    <li>Automated Scaling</li>
                    <li>Zero Downtime</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>
            </div>
          </section>

          <section className="success-section">
            <div className="badge">📌 Client Success Stories</div>
            <h2>Success Stories</h2>
            <p className="subtitle">
              Real-world use cases showcasing how our solutions drive measurable business impact across diverse industries and transform organizations worldwide.
            </p>

            <div className="case-grid">
              <div className="case-card">
                <div className="case-header blue">
                  <div className="category">Enterprise</div>
                  <h3>🏢 Digital Transformation at Scale</h3>
                </div>
                <div className="case-body">
                  <p>Helped a Fortune 500 company modernize their legacy systems, resulting in 40% operational efficiency improvement and $2M annual savings.</p>
                  <ul>
                    <li>40% Efficiency Boost</li>
                    <li>98% Uptime</li>
                    <li>$2M Saved</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header green">
                  <div className="category">Healthcare</div>
                  <h3>💊 Patient Data Management System</h3>
                </div>
                <div className="case-body">
                  <p>Developed a HIPAA-compliant platform that streamlined patient records management for a network of 50+ clinics.</p>
                  <ul>
                    <li>50+ Clinics</li>
                    <li>HIPAA Compliant</li>
                    <li>60% Faster Processing</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header purple">
                  <div className="category">E-commerce</div>
                  <h3>🛒 AI-Powered Recommendation Engine</h3>
                </div>
                <div className="case-body">
                  <p>Built a machine learning platform that increased conversion rates by 35% and customer engagement by 50%.</p>
                  <ul>
                    <li>35% Higher Conversion</li>
                    <li>50% More Engagement</li>
                    <li>24/7 AI Support</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    );
  }
}
