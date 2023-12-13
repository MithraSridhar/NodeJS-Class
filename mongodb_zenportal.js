//use zen_class;
//users collection
db.users.insertMany([
    {
      id: "1",
      name: "Mithra",
      coursename: "MERN-Stack",
      mentorname: "Sangeetha",
      email: "mithugopal30@gmail.com",
      phone: "9551308775"
    },
    {
        id: "2",
        name: "Pavithra",
        coursename: "MERN-Stack",
        mentorname: "Sangeetha",
        email: "test@gmail.com",
        phone: "7865456789"
      },
    
      {
        id: "3",
        name: "Vivek",
        coursename: "MERN-Stack",
        mentorname: "Sangeetha1",
        email: "test@gmail.com",
        phone: "76456788900"
      },
      {
        id: "4",
        name: "Sanoj",
        coursename: "MERN-Stack",
        mentorname: "Sangeetha1",
        email: "test@gmail.com",
        phone: "8987656788"
      },
      {
        id: "5",
        name: "Ashok",
        coursename: "MERN-Stack",
        mentorname: "Sangeetha",
        email: "test@gmail.com",
        phone: "9087890087"
      }
  ]
  )

  //codekata collection
db.codekata.insertMany([
    {
      id: "1",
      name: "program1",
      user_id: "1",
      status: "Completed",
      category: "JavaScript"
    },
    {
        id: "2",
        name: "program2",
        user_id: "1",
        status: "Completed",
        category: "JavaScript"
      },
    
      {
        id: "3",
        name: "program1",
        user_id: "2",
        status: "Completed",
        category: "JavaScript"
      },
      {
        id: "4",
        name: "program4",
        user_id: "3",
        status: "Completed",
        category: "HTML"
      },
      {
        id: "5",
        name: "program5",
        user_id: "4",
        status: "Completed",
        category: "CSS"
      },
      {
        id: "6",
        name: "program5",
        user_id: "5",
        status: "Completed",
        category: "CSS"
      },
      {
        id: "7",
        name: "program5",
        user_id: "1",
        status: "Completed",
        category: "CSS"
      },
      {
        id: "8",
        name: "program9",
        user_id: "5",
        status: "Completed",
        category: "Node"
      },
      {
        id: "9",
        name: "program9",
        user_id: "1",
        status: "Completed",
        category: "Node"
      },
      {
        id: "10",
        name: "program9",
        user_id: "2",
        status: "Completed",
        category: "Node"
      }
  ]
  )

  db.codekata.insertMany([
    {
      id: "11",
      name: "program12",
      user_id: "1",
      status: "In Progress",
      category: "JavaScript"
    },
    {
        id: "12",
        name: "program22",
        user_id: "4",
        status: "In Progress",
        category: "JavaScript"
      },
    
      {
        id: "13",
        name: "program11",
        user_id: "2",
        status: "In Progress",
        category: "JavaScript"
      },
      {
        id: "14",
        name: "program4",
        user_id: "4",
        status: "In Progress",
        category: "HTML"
      }    
  ]
  )
//attendance collection
  db.attendance.insertMany([
    {
      id: "1",
      user_id: "1",
      status: "Present",
      date: "15/10/2023"
    },
    {
        id: "2",
        user_id: "1",
        status: "Present",
        date: "16/10/2023"
      },
    {
        id: "3",
        user_id: "1",
        status: "Present",
        date: "17/10/2023"
    },
    {
        id: "4",
        user_id: "1",
        status: "Present",
        date: "18/10/2023"
    },
    {
        id: "5",
        user_id: "1",
        status: "Present",
        date: "19/10/2023"
    },
    {
        id: "6",
        user_id: "1",
        status: "Absent",
        date: "20/10/2023"
    },
    {
        id: "7",
        user_id: "1",
        status: "Present",
        date: "23/10/2023"
    },
    {
        id: "8",
        user_id: "1",
        status: "Present",
        date: "24/10/2023"
    },
    {
        id: "9",
        user_id: "1",
        status: "Absent",
        date: "25/10/2023"
    },
    {
        id: "10",
        user_id: "1",
        status: "Present",
        date: "26/10/2023"
    },
    {
        id: "11",
        user_id: "1",
        status: "Present",
        date: "27/10/2023"
    },
    {
        id: "12",
        user_id: "1",
        status: "Present",
        date: "28/10/2023"
    },
    {
        id: "13",
        user_id: "1",
        status: "Present",
        date: "29/10/2023"
    },
    {
        id: "14",
        user_id: "1",
        status: "Present",
        date: "30/10/2023"
    },
    {
        id: "15",
        user_id: "2",
        status: "Present",
        date: "15/10/2023"
      },
      {
          id: "16",
          user_id: "2",
          status: "Present",
          date: "16/10/2023"
        },
      {
          id: "17",
          user_id: "2",
          status: "Present",
          date: "17/10/2023"
      },
      {
          id: "18",
          user_id: "2",
          status: "Present",
          date: "18/10/2023"
      },
      {
          id: "19",
          user_id: "2",
          status: "Present",
          date: "19/10/2023"
      },
      {
          id: "20",
          user_id: "2",
          status: "Absent",
          date: "20/10/2023"
      },
      {
          id: "21",
          user_id: "2",
          status: "Present",
          date: "23/10/2023"
      },
      {
          id: "22",
          user_id: "3",
          status: "Present",
          date: "24/10/2023"
      },
      {
          id: "23",
          user_id: "3",
          status: "Absent",
          date: "25/10/2023"
      },
      {
          id: "24",
          user_id: "3",
          status: "Present",
          date: "26/10/2023"
      },
      {
          id: "25",
          user_id: "3",
          status: "Present",
          date: "27/10/2023"
      },
      {
          id: "26",
          user_id: "3",
          status: "Present",
          date: "28/10/2023"
      },
      {
          id: "27",
          user_id: "3",
          status: "Present",
          date: "29/10/2023"
      },
      {
          id: "27",
          user_id: "3",
          status: "Present",
          date: "30/10/2023"
      },
      {
        id: "28",
        user_id: "4",
        status: "Present",
        date: "15/10/2023"
      },
      {
          id: "29",
          user_id: "4",
          status: "Present",
          date: "16/10/2023"
        },
      {
          id: "30",
          user_id: "4",
          status: "Present",
          date: "17/10/2023"
      },
      {
          id: "31",
          user_id: "4",
          status: "Present",
          date: "18/10/2023"
      },
      {
          id: "32",
          user_id: "4",
          status: "Present",
          date: "19/10/2023"
      },
      {
          id: "33",
          user_id: "4",
          status: "Absent",
          date: "20/10/2023"
      },
      {
          id: "34",
          user_id: "4",
          status: "Present",
          date: "23/10/2023"
      },
      {
          id: "35",
          user_id: "4",
          status: "Present",
          date: "24/10/2023"
      },
      {
          id: "36",
          user_id: "4",
          status: "Absent",
          date: "25/10/2023"
      },
      {
          id: "37",
          user_id: "5",
          status: "Present",
          date: "26/10/2023"
      },
      {
          id: "38",
          user_id: "5",
          status: "Present",
          date: "27/10/2023"
      },
      {
          id: "39",
          user_id: "5",
          status: "Present",
          date: "28/10/2023"
      },
      {
          id: "40",
          user_id: "5",
          status: "Present",
          date: "29/10/2023"
      },
      {
          id: "41",
          user_id: "5",
          status: "Present",
          date: "30/10/2023"
      },
  ]
  )

  //topics collection
  db.topics.insertMany([
    {
      id: "1",
      name: "topic1",
      task_id: "1",
      date: "15/10/2023"
    },
    {
        id: "2",
        name: "topic2",
        task_id: "2",
        date: "16/10/2023"
    },
    {
        id: "3",
        name: "topic3",
        task_id: "3",
        date: "17/10/2023"
    },
    {
        id: "4",
        name: "topic4",
        task_id: "4",
        date: "18/10/2023"
    },
    {
        id: "5",
        name: "topic5",
        task_id: "5",
        date: "19/10/2023"
    },
    {
        id: "6",
        name: "topic6",
        task_id: "6",
        date: "22/10/2023"
    },
    {
        id: "7",
        name: "topic7",
        task_id: "7",
        date: "23/10/2023"
    },
    {
        id: "8",
        name: "topic8",
        task_id: "8",
        date: "24/10/2023"
    },
    {
        id: "9",
        name: "topic9",
        task_id: "9",
        date: "25/10/2023"
    },
    {
        id: "10",
        name: "topic10",
        task_id: "10",
        date: "26/10/2023"
    },
    {
        id: "11",
        name: "topic11",
        task_id: "11",
        date: "29/10/2023"
    },
    {
        id: "12",
        name: "topic12",
        task_id: "12",
        date: "30/10/2023"
    }
    ]
  )

 // tasks collection 
  db.tasks.insertMany([
    {
      id: "1",
      name: "task1",
      topic_name: "topic1",
      user_id: "1",
      date: "15/10/2023",
      status: "Completed"
    },
    {
        id: "2",
        name: "task2",
        topic_name: "topic2",
        user_id: "1",
        date: "16/10/2023",
        status: "Completed"
    },
    {
        id: "3",
        name: "task3",
        topic_name: "topic3",
        user_id: "1",
        date: "17/10/2023",
        status: "Completed"
    },
    {
        id: "4",
        name: "task4",
        topic_name: "topic4",
        user_id: "1",
        date: "18/10/2023",
        status: "Completed"
    },
    {
        id: "5",
        name: "task5",
        topic_name: "topic5",
        user_id: "1",
        date: "19/10/2023",
        status: "Completed"
    },
    {
        id: "6",
        name: "task6",
        topic_name: "topic6",
        user_id: "1",
        date: "22/10/2023",
        status: "Completed"
    },
    {
        id: "7",
        name: "task7",
        topic_name: "topic7",
        user_id: "1",
        date: "23/10/2023",
        status: "Completed"
    },
    {
        id: "8",
        name: "task8",
        topic_name: "topic8",
        user_id: "1",
        date: "24/10/2023",
        status: "Completed"
    },
    {
        id: "9",
        name: "task9",
        topic_name: "topic9",
        user_id: "1",
        date: "25/10/2023",
        status: "In Progress"
    },
    {
        id: "10",
        name: "task10",
        topic_name: "topic10",
        user_id: "1",
        date: "26/10/2023",
        status: "Completed"
    },
    {
        id: "11",
        name: "task11",
        topic_name: "topic11",
        user_id: "1",
        date: "29/10/2023",
        status: "Completed"
    },
    {
        id: "12",
        name: "task12",
        topic_name: "topic12",
        user_id: "1",
        date: "30/10/2023",
        status: "In Progress"
    },
    {
        id: "13",
        name: "task1",
        topic_name: "topic1",
        user_id: "2",
        date: "15/10/2023",
        status: "Completed"
      },
      {
          id: "14",
          name: "task2",
          topic_name: "topic2",
          user_id: "2",
          date: "16/10/2023",
          status: "Completed"
      },
      {
          id: "15",
          name: "task3",
          topic_name: "topic3",
          user_id: "2",
          date: "17/10/2023",
          status: "Completed"
      },
      {
          id: "16",
          name: "task4",
          topic_name: "topic4",
          user_id: "2",
          date: "18/10/2023",
          status: "Completed"
      },
      {
          id: "17",
          name: "task5",
          topic_name: "topic5",
          user_id: "2",
          date: "19/10/2023",
          status: "Completed"
      },
      {
          id: "18",
          name: "task6",
          topic_name: "topic6",
          user_id: "2",
          date: "22/10/2023",
          status: "Completed"
      },
      {
          id: "19",
          name: "task7",
          topic_name: "topic7",
          user_id: "2",
          date: "23/10/2023",
          status: "In Progress"
      },
      {
          id: "20",
          name: "task8",
          topic_name: "topic8",
          user_id: "2",
          date: "24/10/2023",
          status: "Completed"
      },
      {
          id: "21",
          name: "task9",
          topic_name: "topic9",
          user_id: "2",
          date: "25/10/2023",
          status: "In Progress"
      },
      {
          id: "22",
          name: "task10",
          topic_name: "topic10",
          user_id: "2",
          date: "26/10/2023",
          status: "Completed"
      },
      {
          id: "23",
          name: "task11",
          topic_name: "topic11",
          user_id: "2",
          date: "29/10/2023",
          status: "In Progress"
      },
      {
          id: "24",
          name: "task12",
          topic_name: "topic12",
          user_id: "2",
          date: "30/10/2023",
          status: "In Progress"
      },
      {
        id: "25",
        name: "task1",
        topic_name: "topic1",
        user_id: "3",
        date: "15/10/2023",
        status: "In Progress"
      },
      {
          id: "26",
          name: "task2",
          topic_name: "topic2",
          user_id: "3",
          date: "16/10/2023",
          status: "Completed"
      },
      {
          id: "27",
          name: "task3",
          topic_name: "topic3",
          user_id: "3",
          date: "17/10/2023",
          status: "In Progress"
      },
      {
          id: "28",
          name: "task4",
          topic_name: "topic4",
          user_id: "3",
          date: "18/10/2023",
          status: "Completed"
      },
      {
          id: "29",
          name: "task5",
          topic_name: "topic5",
          user_id: "3",
          date: "19/10/2023",
          status: "Completed"
      },
      {
          id: "30",
          name: "task6",
          topic_name: "topic6",
          user_id: "3",
          date: "22/10/2023",
          status: "Completed"
      },
      {
          id: "31",
          name: "task7",
          topic_name: "topic7",
          user_id: "3",
          date: "23/10/2023",
          status: "In Progress"
      },
      {
          id: "32",
          name: "task8",
          topic_name: "topic8",
          user_id: "3",
          date: "24/10/2023",
          status: "Completed"
      },
      {
          id: "33",
          name: "task9",
          topic_name: "topic9",
          user_id: "3",
          date: "25/10/2023",
          status: "In Progress"
      },
      {
          id: "34",
          name: "task10",
          topic_name: "topic10",
          user_id: "3",
          date: "26/10/2023",
          status: "Completed"
      },
      {
          id: "35",
          name: "task11",
          topic_name: "topic11",
          user_id: "3",
          date: "29/10/2023",
          status: "Completed"
      },
      {
          id: "36",
          name: "task12",
          topic_name: "topic12",
          user_id: "3",
          date: "30/10/2023",
          status: "In Progress"
      },
      {
        id: "37",
        name: "task1",
        topic_name: "topic1",
        user_id: "4",
        date: "15/10/2023",
        status: "Completed"
      },
      {
          id: "38",
          name: "task2",
          topic_name: "topic2",
          user_id: "4",
          date: "16/10/2023",
          status: "In Progress"
      },
      {
          id: "39",
          name: "task3",
          topic_name: "topic3",
          user_id: "4",
          date: "17/10/2023",
          status: "In Progress"
      },
      {
          id: "40",
          name: "task4",
          topic_name: "topic4",
          user_id: "4",
          date: "18/10/2023",
          status: "Completed"
      },
      {
          id: "41",
          name: "task5",
          topic_name: "topic5",
          user_id: "4",
          date: "19/10/2023",
          status: "In Progress"
      },
      {
          id: "42",
          name: "task6",
          topic_name: "topic6",
          user_id: "4",
          date: "22/10/2023",
          status: "Completed"
      },
      {
          id: "43",
          name: "task7",
          topic_name: "topic7",
          user_id: "4",
          date: "23/10/2023",
          status: "In Progress"
      },
      {
          id: "44",
          name: "task8",
          topic_name: "topic8",
          user_id: "4",
          date: "24/10/2023",
          status: "In Progress"
      },
      {
          id: "45",
          name: "task9",
          topic_name: "topic9",
          user_id: "4",
          date: "25/10/2023",
          status: "In Progress"
      },
      {
          id: "46",
          name: "task10",
          topic_name: "topic10",
          user_id: "4",
          date: "26/10/2023",
          status: "Completed"
      },
      {
          id: "47",
          name: "task11",
          topic_name: "topic11",
          user_id: "4",
          date: "29/10/2023",
          status: "Completed"
      },
      {
          id: "48",
          name: "task12",
          topic_name: "topic12",
          user_id: "4",
          date: "30/10/2023",
          status: "In Progress"
      },
      {
        id: "49",
        name: "task1",
        topic_name: "topic1",
        user_id: "5",
        date: "15/10/2023",
        status: "Completed"
      },
      {
          id: "50",
          name: "task2",
          topic_name: "topic2",
          user_id: "5",
          date: "16/10/2023",
          status: "In Progress"
      },
      {
          id: "51",
          name: "task3",
          topic_name: "topic3",
          user_id: "5",
          date: "17/10/2023",
          status: "In Progress"
      },
      {
          id: "52",
          name: "task4",
          topic_name: "topic4",
          user_id: "5",
          date: "18/10/2023",
          status: "In Progress"
      },
      {
          id: "53",
          name: "task5",
          topic_name: "topic5",
          user_id: "5",
          date: "19/10/2023",
          status: "In Progress"
      },
      {
        id: "54",
        name: "task6",
        topic_name: "topic6",
        user_id: "5",
        date: "20/10/2023",
        status: "In Progress"
    },
    {
          id: "55",
          name: "task7",
          topic_name: "topic7",
          user_id: "5",
          date: "23/10/2023",
          status: "Completed"
    },
      {
          id: "56",
          name: "task8",
          topic_name: "topic8",
          user_id: "5",
          date: "24/10/2023",
          status: "Completed"
      },
      {
          id: "57",
          name: "task9",
          topic_name: "topic9",
          user_id: "5",
          date: "25/10/2023",
          status: "In Progress"
      },
      {
          id: "58",
          name: "task10",
          topic_name: "topic10",
          user_id: "5",
          date: "26/10/2023",
          status: "In Progress"
      },
      {
          id: "59",
          name: "task11",
          topic_name: "topic11",
          user_id: "5",
          date: "29/10/2023",
          status: "Completed"
      },
      {
        id: "60",
        name: "task12",
        topic_name: "topic12",
        user_id: "5",
        date: "30/10/2023",
        status: "Completed"
    }
    ]
  )  

// companydrive collection
  db.companydrive.insertMany([
    {
      id: "1",
      name: "drive1",
      user_id: "1",
      conducted_at: "15/10/2023",
      status: "Attended"
    },
    {
        id: "2",
        name: "drive2",
        user_id: "1",
        conducted_at: "25/10/2023",
        status: "Attended"
    },
    {
        id: "2",
        name: "drive3",
        user_id: "1",
        conducted_at: "30/10/2023",
        status: "Attended"
    },
    {
        id: "1",
        name: "drive1",
        user_id: "2",
        conducted_at: "15/10/2023",
        status: "Attended"
    },
    {
          id: "2",
          name: "drive2",
          user_id: "2",
          conducted_at: "25/10/2023",
          status: "Attended"
    },
    {
          id: "2",
          name: "drive3",
          user_id: "2",
          conducted_at: "30/10/2023",
          status: "Attended"
    }
  ]
  )