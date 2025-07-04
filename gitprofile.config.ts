// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Xavier1999-Chen', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      // mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // sortBy: 'updated',
        // forks: true,
        projects: [
                   'Xavier1999-Chen/Real-time-Heart-Rate-Recognition-by-IoT-Camera',
                   'Xavier1999-Chen/RetinaNet-Pytorch',
                   // 'Xavier1999-Chen/dynamic-qrcode-UI',
                   'Xavier1999-Chen/Finacial-Fraud-Scenario-Identification',
                   'Xavier1999-Chen/Federal-Learning-LSTM-PricePredict',
                   'Xavier1999-Chen/Taste-of-Asia-Projects',
                   'Xavier1999-Chen/Phi-2-multiple-choice-QA'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Multi-camera-based VSLAM Navigation System',
          description:
            'Implemented a large-scale scene relocation algorithm based on single-view images and produced a SfM model of a large-scale urban scene.\n Designed and built a data acquisition vehicle equipped with multiple cameras, LIDAR, GPS and INS, with all sensors controlled by the ROS2 system.',
          imageUrl:
            'https://github.com/Xavier1999-Chen/portfolio/blob/main/pic/vslam_platform.jpg?raw=true',
          link: 'https://hub.docker.com/r/xavier1999/vslam-data-collection-platform',
        },
        {
          title: 'Real-time Heart Rate Recognition by IoT Camera',
          description:
            "Detect the user's real-time heart rate by analyzing the color changing frequency in specific facial areas between frames.",
          imageUrl:
            'https://github.com/Xavier1999-Chen/portfolio/blob/main/pic/UI.png?raw=true',
          link: 'https://github.com/Xavier1999-Chen/Real-time-Heart-Rate-Recognition-by-IoT-Camera',
        },
        {
          title: 'SANDWICH Mental Support Chatbot',
          description:
            'A mental support chatbot that utilizes a sandwich architecture, where a language model acts as a messenger between users. This unique architecture allows SANDWICH to take full advantage of LLM technology and anonymously share empathic experiences between users. By incorporating these capabilities, SANDWICH aims to mitigate the issues of harassment and the scarcity of volunteers commonly found in current chat applications.',
          imageUrl:
            'https://github.com/Xavier1999-Chen/portfolio/blob/main/pic/SANDWICH%20Mental%20Support%20Chatbot.png?raw=true',
          link: 'https://hjxsk.vercel.app/',
        },
        {
          title: 'TAB AI Healthcare Platform',
          description:
            'A mental health support platform that provides users with therapist matching and 24/7 professional AI online mental health counseling.',
          imageUrl:
            'https://github.com/Xavier1999-Chen/portfolio/blob/main/pic/TAB%20AI%20Healthcare%20Platform.png?raw=true',
          link: 'https://www.tabhealth.ai/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Xingyi Chen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'xychenn',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '+852 56140240',
    email: 'xavier1999@126.com',
  },
  resume: {
    fileUrl:
      // 'https://1drv.ms/b/c/ed1c9dc9347a2cae/EXc_zJZKN19FurePQLPztEoBBM7cwFyAu39pJMagscn9lQ?e=d1fByv'
      // 'https://1drv.ms/b/c/ed1c9dc9347a2cae/EYf4kKSi5elDmtDDbCroQKQBkPPmWXMMa9w-y6LgaKwelg?e=H0NK2X'
      ''
      // 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Xavier1999-Chen/portfolio/blob/main/CV-ChenXingyi.pdf', // Empty fileUrl will hide the `Download Resume` button.
    
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    // 'React.js',
    // 'Node.js',
    // 'Nest.js',
    // 'MySQL',
    // 'PostgreSQL',
    'Python',
    'C++',
    'Large Model Post/Pre-training',
    'ROS/ROS2',
    'Redis',
    'Git',
    'Docker',
    'Kubernetes',
    'Firebase',
    'Web Development',
    'Scrum Management',
    // 'PHPUnit',
    // 'CSS',
    // 'Antd',
    // 'Tailwind',
  ],
  experiences: [
    {
      company: 'AIxHealthcare',
      position: 'R&D Intern',
      from: 'June 2025',
      to: 'Present',
      companyLink: 'https://aiqicha.baidu.com/company_detail_53194863410710',
    },
    {
      company: 'Taste of Asia',
      position: 'Associate Project Manager',
      from: 'January 2024',
      to: 'May 2025',
      companyLink: 'https://www.tasteofasia.com.hk/',
    },
    {
      company: 'Westlake University CVGL Group',
      position: 'Research Assistant',
      from: 'December 2022',
      to: 'July 2023',
      companyLink: 'https://www.westlake.edu.cn/faculty/peidong-liu.html',
    },
    {
      company: 'Tongji University Wireless Communicatin Group',
      position: 'Research Assistant',
      from: 'August 2022',
      to: 'November 2022',
      companyLink: 'https://comm.tongji.edu.cn/c9/94/c6936a182676/page.htm',
    },
    {
      company: 'ZF Asia Pacific Technical Center',
      position: 'Algorithm Intern',
      from: 'March 2022',
      to: 'June 2022',
      companyLink: 'https://www.zf.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'The University of Hong Kong',
      degree: 'Master of Science in Computer Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Tongji University',
      degree: 'Bachelor of Engineering in Electronics Science and Technology',
      from: '2018',
      to: '2022',
    },
  ],
  // // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    // disableSwitch: false,
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright © Xavier1999-Chen`,
    // `Made with <a 
    //   class="text-primary" href="https://github.com/arifszn/gitprofile"
    //   target="_blank"
    //   rel="noreferrer"
    // >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
