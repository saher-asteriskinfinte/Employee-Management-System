const employees = [
  {
    id: 1,
    name:"saher",
    email: "employee1@example.com",
    password: "123",
    taskCount:{
      active:1,
      completed:1,
      newTask:1,
      failed:1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Prepare a detailed monthly sales performance report that includes region-wise revenue data, product category comparisons, graphical charts for growth trends, and a summary of key insights to help management make better strategic decisions for the upcoming quarter.",
        taskDate: "2026-02-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Conduct a comprehensive meeting with ABC Corp to discuss their business requirements, clarify project deliverables, agree on timelines and milestones, and document all important points so the development team can proceed without confusion.",
        taskDate: "2026-02-05",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM",
        taskDescription: "Thoroughly update the customer records in the CRM system by adding newly acquired leads, correcting outdated contact information, tagging high-value prospects, and logging recent communication history for better sales tracking.",
        taskDate: "2026-02-03",
        category: "Data Entry"
      }
    ]
  },
  {
    id: 2,
    name:"Sania",
    email: "employee2@example.com",
    password: "123",
    taskCount:{
      active:2,
      completed:1,
      newTask:1,
      failed:1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern and visually appealing homepage wireframe that focuses on improved user experience, proper content hierarchy, clear call-to-action placement, and responsive layout planning for both desktop and mobile screens.",
        taskDate: "2026-02-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Identify and resolve the responsive issues in the navigation bar by debugging CSS breakpoints, fixing alignment problems, and ensuring smooth dropdown functionality across all devices and screen sizes.",
        taskDate: "2026-02-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Standup",
        taskDescription: "Attend the daily standup meeting, provide updates on current tasks, highlight any blockers, discuss upcoming priorities, and coordinate with team members to ensure smooth workflow and timely delivery.",
        taskDate: "2026-02-08",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize all website images using modern formats, reduce file sizes without losing quality, implement lazy loading, and test the performance improvements using Lighthouse reports.",
        taskDate: "2026-02-06",
        category: "Optimization"
      }
    ]
  },
  {
    id: 3,
    name:"Roshini",
    email: "employee3@example.com",
    password: "123",
    taskCount:{
      active:1,
      newTask:1,
      completed:1,
      failed:1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform a complete weekly database backup, verify backup integrity, store copies in secure cloud storage, and document the process so that data can be restored quickly in case of system failure.",
        taskDate: "2026-02-11",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Continuously monitor server uptime, analyze error logs, check CPU and memory usage, and ensure all backend services are running smoothly without performance bottlenecks or unexpected downtime.",
        taskDate: "2026-02-07",
        category: "Monitoring"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the third-party payment API by implementing secure authentication, handling edge cases for failed transactions, validating responses, and writing proper error-handling logic.",
        taskDate: "2026-02-04",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    name:"Giraffe",
    email: "employee4@example.com",
    password: "123",
    taskCount:{
      active:2,
      newTask:1,
      completed:1,
      failed:1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social Media Post",
        taskDescription: "Create engaging social media content including captions, hashtags, and creative visuals, schedule posts for optimal timing, and track performance metrics to improve audience engagement.",
        taskDate: "2026-02-12",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Design and prepare the monthly newsletter campaign with compelling content, personalized subject lines, audience segmentation, and performance tracking using email analytics tools.",
        taskDate: "2026-02-09",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Conduct detailed market research on competitor pricing, promotional strategies, and customer preferences, then compile a structured report with actionable recommendations.",
        taskDate: "2026-02-02",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad Performance Review",
        taskDescription: "Analyze Google Ads performance metrics including CTR, CPC, and conversion rates, identify underperforming campaigns, and suggest optimization strategies.",
        taskDate: "2026-02-01",
        category: "Analytics"
      }
    ]
  },
  {
    id: 5,
    name:"Ano",
    email: "employee5@example.com",
    password: "123",
    taskCount:{
      active:1,
      newTask:1,
      completed:1,
      failed:1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Perform a detailed weekly inventory audit, reconcile physical stock with system records, identify discrepancies, and update quantities to maintain accurate inventory tracking.",
        taskDate: "2026-02-12",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Supplier Call",
        taskDescription: "Communicate with the supplier to discuss delays, confirm revised delivery timelines, negotiate quantities, and document the conversation for procurement records.",
        taskDate: "2026-02-06",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Pricing Sheet",
        taskDescription: "Revise the Q1 pricing spreadsheet by updating costs, recalculating profit margins, applying discount tiers, and validating formulas for financial accuracy.",
        taskDate: "2026-02-03",
        category: "Finance"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name:'saher',
    email: "admin@example.com",
    password: "123"
  }];

export const setLocalStorage =()=>{
localStorage.setItem("employees",JSON.stringify(employees));
localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage =()=>{
const employees = JSON.parse(localStorage.getItem("employees"));
const admin = JSON.parse(localStorage.getItem("admin"));
return {employees,admin};
}