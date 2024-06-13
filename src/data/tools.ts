const tools = [
    { value: ' Prismic ', label: ' Prismic ' },
    { value: '.NET', label: '.NET' },
    { value: '3D Studiomax', label: '3D Studiomax' },
    { value: 'Ableton Live', label: 'Ableton Live' },
    { value: 'Access ', label: 'Access ' },
    { value: 'Active Campaign', label: 'Active Campaign' },
    { value: 'Adobe After Effects', label: 'Adobe After Effects' },
    { value: 'Adobe Audition', label: 'Adobe Audition' },
    { value: 'Adobe Creative Suite', label: 'Adobe Creative Suite' },
    { value: 'Adobe Dreamweaver', label: 'Adobe Dreamweaver' },
    { value: 'Adobe Illustrator', label: 'Adobe Illustrator' },
    { value: 'Adobe InDesign', label: 'Adobe InDesign' },
    { value: 'Adobe Lightroom', label: 'Adobe Lightroom' },
    { value: 'Adobe Photoshop', label: 'Adobe Photoshop' },
    { value: 'Adobe Premiere Pro', label: 'Adobe Premiere Pro' },
    { value: 'Adobe XD', label: 'Adobe XD' },
    { value: 'Affinity Designer', label: 'Affinity Designer' },
    { value: 'Agile', label: 'Agile' },
    { value: 'Airtable', label: 'Airtable' },
    { value: 'Ajax', label: 'Ajax' },
    { value: 'Amazon DynamoDB', label: 'Amazon DynamoDB' },
    { value: 'Amazon EC2', label: 'Amazon EC2' },
    { value: 'Android', label: 'Android' },
    { value: 'Android Studio', label: 'Android Studio' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Apache Airflow ', label: 'Apache Airflow ' },
    { value: 'Apigee', label: 'Apigee' },
    { value: 'Asana', label: 'Asana' },
    { value: 'ASP.NET', label: 'ASP.NET' },
    { value: 'ASP.NET Core', label: 'ASP.NET Core' },
    { value: 'Atom', label: 'Atom' },
    { value: 'AutoCAD', label: 'AutoCAD' },
    { value: 'Autodesk 3ds Max', label: 'Autodesk 3ds Max' },
    { value: 'Autodesk Inventor', label: 'Autodesk Inventor' },
    { value: 'Autodesk Maya', label: 'Autodesk Maya' },
    { value: 'AWS', label: 'AWS' },
    { value: 'AWS CloudFormation', label: 'AWS CloudFormation' },
    { value: 'AWS Lambda', label: 'AWS Lambda' },
    { value: 'Azure', label: 'Azure' },
    { value: 'Azure DevOps', label: 'Azure DevOps' },
    { value: 'Backbone.js', label: 'Backbone.js' },
    { value: 'Balsamiq', label: 'Balsamiq' },
    { value: 'Bash', label: 'Bash' },
    { value: 'BeautifulSoup', label: 'BeautifulSoup' },
    { value: 'Bitbucket', label: 'Bitbucket' },
    { value: 'Blender', label: 'Blender' },
    { value: 'Bootstrap', label: 'Bootstrap' },
    { value: 'Buffer', label: 'Buffer' },
    { value: 'C', label: 'C' },
    { value: 'C#', label: 'C#' },
    { value: 'C++', label: 'C++' },
    { value: 'Canva', label: 'Canva' },
    { value: 'Ceramic Network', label: 'Ceramic Network' },
    { value: 'Charles', label: 'Charles' },
    { value: 'Cinema 4D', label: 'Cinema 4D' },
    { value: 'ClickUp', label: 'ClickUp' },
    { value: 'Cloud Firestore', label: 'Cloud Firestore' },
    { value: 'Confluence', label: 'Confluence' },
    { value: 'Contentful ', label: 'Contentful ' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'CorelDraw', label: 'CorelDraw' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Cypress', label: 'Cypress' },
    { value: 'D3.js', label: 'D3.js' },
    { value: 'DALL·E 2', label: 'DALL·E 2' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Databricks ', label: 'Databricks ' },
    { value: 'Datagrip', label: 'Datagrip' },
    { value: 'DaVinci Resolve', label: 'DaVinci Resolve' },
    { value: 'dbt', label: 'dbt' },
    { value: 'Deno', label: 'Deno' },
    { value: 'Descript', label: 'Descript' },
    { value: 'DigitalOcean', label: 'DigitalOcean' },
    { value: 'Discord', label: 'Discord' },
    { value: 'Docker', label: 'Docker' },
    { value: 'DocuSign', label: 'DocuSign' },
    { value: 'Drupal', label: 'Drupal' },
    { value: 'Elasticsearch', label: 'Elasticsearch' },
    { value: 'Electron', label: 'Electron' },
    { value: 'Emacs', label: 'Emacs' },
    { value: 'Ethereum', label: 'Ethereum' },
    { value: 'Excel ', label: 'Excel ' },
    { value: 'ExpressJS', label: 'ExpressJS' },
    { value: 'Facebook Ads', label: 'Facebook Ads' },
    { value: 'Facebook Business Manager', label: 'Facebook Business Manager' },
    { value: 'Figma', label: 'Figma' },
    { value: 'Final Cut Pro', label: 'Final Cut Pro' },
    { value: 'Firebase', label: 'Firebase' },
    { value: 'Flask', label: 'Flask' },
    { value: 'Flutter ', label: 'Flutter ' },
    { value: 'Framer', label: 'Framer' },
    { value: 'G Suite', label: 'G Suite' },
    { value: 'Gatsby', label: 'Gatsby' },
    { value: 'Generative adversarial networks (GANs)', label: 'Generative adversarial networks (GANs)' },
    { value: 'GIMP', label: 'GIMP' },
    { value: 'Git', label: 'Git' },
    { value: 'GitHub', label: 'GitHub' },
    { value: 'GitLab', label: 'GitLab' },
    { value: 'Go', label: 'Go' },
    { value: 'Golang', label: 'Golang' },
    { value: 'Google Ads', label: 'Google Ads' },
    { value: 'Google Analytics', label: 'Google Analytics' },
    { value: 'Google Cloud Platform', label: 'Google Cloud Platform' },
    { value: 'Google Docs', label: 'Google Docs' },
    { value: 'Google Drive', label: 'Google Drive' },
    { value: 'Google Search Console', label: 'Google Search Console' },
    { value: 'Google Sheets', label: 'Google Sheets' },
    { value: 'GraphQL', label: 'GraphQL' },
    { value: 'Grunt', label: 'Grunt' },
    { value: 'GSAP', label: 'GSAP' },
    { value: 'HootSuite', label: 'HootSuite' },
    { value: 'Hotjar', label: 'Hotjar' },
    { value: 'HTML5', label: 'HTML5' },
    { value: 'HubSpot', label: 'HubSpot' },
    { value: 'IBM Watson', label: 'IBM Watson' },
    { value: 'iMovie', label: 'iMovie' },
    { value: 'Inkscape', label: 'Inkscape' },
    { value: 'Instagram Ads', label: 'Instagram Ads' },
    { value: 'IntelliJ', label: 'IntelliJ' },
    { value: 'Intercom', label: 'Intercom' },
    { value: 'Invision', label: 'Invision' },
    { value: 'Ionic', label: 'Ionic' },
    { value: 'iOS', label: 'iOS' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Jenkins', label: 'Jenkins' },
    { value: 'Jira', label: 'Jira' },
    { value: 'Jupyter', label: 'Jupyter' },
    { value: 'Kafka', label: 'Kafka' },
    { value: 'Keras', label: 'Keras' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'LinkedIn', label: 'LinkedIn' },
    { value: 'Linux', label: 'Linux' },
    { value: 'LucidCharts', label: 'LucidCharts' },
    { value: 'Magento', label: 'Magento' },
    { value: 'MailChimp', label: 'MailChimp' },
    { value: 'Marketo', label: 'Marketo' },
    { value: 'MATLAB', label: 'MATLAB' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Microsoft Excel', label: 'Microsoft Excel' },
    { value: 'Microsoft Office 365', label: 'Microsoft Office 365' },
    { value: 'Microsoft Outlook', label: 'Microsoft Outlook' },
    { value: 'Microsoft Power BI', label: 'Microsoft Power BI' },
    { value: 'Microsoft PowerPoint', label: 'Microsoft PowerPoint' },
    { value: 'Microsoft Project', label: 'Microsoft Project' },
    { value: 'Microsoft SQL Server', label: 'Microsoft SQL Server' },
    { value: 'Microsoft Teams', label: 'Microsoft Teams' },
    { value: 'Microsoft Visio', label: 'Microsoft Visio' },
    { value: 'Microsoft Word', label: 'Microsoft Word' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'MySQL', label: 'MySQL' },
    { value: 'Netlify', label: 'Netlify' },
    { value: 'Next.js', label: 'Next.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Notion', label: 'Notion' },
    { value: 'npm', label: 'npm' },
    { value: 'NumPy', label: 'NumPy' },
    { value: 'OpenAI ', label: 'OpenAI ' },
    { value: 'OpenCV', label: 'OpenCV' },
    { value: 'Oracle', label: 'Oracle' },
    { value: 'Oracle SQL', label: 'Oracle SQL' },
    { value: 'Outlook ', label: 'Outlook ' },
    { value: 'Pandas', label: 'Pandas' },
    { value: 'PayPal', label: 'PayPal' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Pinterest', label: 'Pinterest' },
    { value: 'PostCSS', label: 'PostCSS' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'Postman', label: 'Postman' },
    { value: 'Power BI ', label: 'Power BI ' },
    { value: 'Prettier', label: 'Prettier' },
    { value: 'Prisma', label: 'Prisma' },
    { value: 'Pro Tools', label: 'Pro Tools' },
    { value: 'Procreate', label: 'Procreate' },
    { value: 'Prometheus', label: 'Prometheus' },
    { value: 'Puppeteer', label: 'Puppeteer' },
    { value: 'Python', label: 'Python' },
    { value: 'PyTorch', label: 'PyTorch' },
    { value: 'R', label: 'R' },
    { value: 'React', label: 'React' },
    { value: 'React Native', label: 'React Native' },
    { value: 'Redis', label: 'Redis' },
    { value: 'Redux', label: 'Redux' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Ruby on Rails', label: 'Ruby on Rails' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Salesforce', label: 'Salesforce' },
    { value: 'Sass', label: 'Sass' },
    { value: 'Selenium', label: 'Selenium' },
    { value: 'SEO', label: 'SEO' },
    { value: 'Sketch', label: 'Sketch' },
    { value: 'Slack', label: 'Slack' },
    { value: 'Snowflake', label: 'Snowflake' },
    { value: 'SolidWorks', label: 'SolidWorks' },
    { value: 'Spring Boot', label: 'Spring Boot' },
    { value: 'SQL', label: 'SQL' },
    { value: 'SQLite', label: 'SQLite' },
    { value: 'Stripe', label: 'Stripe' },
    { value: 'Tableau', label: 'Tableau' },
    { value: 'Tailwind CSS', label: 'Tailwind CSS' },
    { value: 'TensorFlow', label: 'TensorFlow' },
    { value: 'Terraform', label: 'Terraform' },
    { value: 'TikTok', label: 'TikTok' },
    { value: 'Trello', label: 'Trello' },
    { value: 'Twilio', label: 'Twilio' },
    { value: 'Twitter', label: 'Twitter' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'Unity', label: 'Unity' },
    { value: 'Unreal Engine', label: 'Unreal Engine' },
    { value: 'Visual Studio Code', label: 'Visual Studio Code' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Webflow', label: 'Webflow' },
    { value: 'Webpack', label: 'Webpack' },
    { value: 'WordPress', label: 'WordPress' },
    { value: 'Xcode', label: 'Xcode' },
    { value: 'Zapier', label: 'Zapier' },
    { value: 'Zendesk', label: 'Zendesk' },
    { value: 'Zeplin', label: 'Zeplin' },
    { value: 'Zoho', label: 'Zoho' },
    { value: 'Zoom', label: 'Zoom' },
];

export default tools;
