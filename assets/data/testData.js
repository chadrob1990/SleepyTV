const testData = [
  // Puppet Show
  {
    category_id: "PLGSQeEA80JFTJ8mjbxfnNb05uKeNSDJ7X",
    type: "videos",
    icon: "theater-masks",
    name: "Videos",
    playlist_id: "PLGSQeEA80JFTJ8mjbxfnNb05uKeNSDJ7X",
    selected_category: false,
    lockable: true,
    content: [],
  },

  // Bedtime books
  {
    category_id: "PL-M8LfrSExhpPg9tVezKF3kRTjY8ttqP9",
    type: "videos",
    icon: "book-open",
    name: "Videos",
    playlist_id: "PL-M8LfrSExhpPg9tVezKF3kRTjY8ttqP9",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLV8OPZ_pmrYomSt82v11W7D1zpElXnse7",
    type: "videos",
    icon: "search",
    name: "Videos",
    playlist_id: "PLV8OPZ_pmrYomSt82v11W7D1zpElXnse7",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PL4QlRvGu70o9JVCp8KUncS6CVWjUdXeFR",
    type: "videos",
    icon: "book-open",
    name: "Videos",
    playlist_id: "PL4QlRvGu70o9JVCp8KUncS6CVWjUdXeFR",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLdQSZAF3FOeea4XqSG9P2Ek96J3OYKjlT",
    type: "videos",
    icon: "book-open",
    name: "Videos",
    playlist_id: "PLdQSZAF3FOeea4XqSG9P2Ek96J3OYKjlT",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLkpSyyq5oG_8ewbupIpuf0jOfiRsjr4yr",
    type: "videos",
    icon: "book-open",
    name: "Videos",
    playlist_id: "PLkpSyyq5oG_8ewbupIpuf0jOfiRsjr4yr",
    selected_category: false,
    lockable: true,
    content: [],
  },

  //Educational
  {
    category_id: "PL0xRKvodbYbehWTQBxH4CwQ4Z5GrxgLPR",
    type: "videos",
    icon: "graduation-cap",
    name: "Videos",
    playlist_id: "PL0xRKvodbYbehWTQBxH4CwQ4Z5GrxgLPR",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PL8TioFHubWFuDF6YIvIZCDzzQjes9QC3S",
    type: "videos",
    icon: "graduation-cap",
    name: "Videos",
    playlist_id: "PL8TioFHubWFuDF6YIvIZCDzzQjes9QC3S",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PL4D48BE9A4572BC15",
    type: "videos",
    icon: "graduation-cap",
    name: "Videos",
    playlist_id: "PL4D48BE9A4572BC15",
    selected_category: false,
    lockable: true,
    content: [],
  },

  // Legos / Marbles
  {
    category_id: "PLhVbeWQ4ifDqCwqe1J_cOPHScfXTH61mW",
    type: "videos",
    icon: "bowling-ball",
    name: "Videos",
    playlist_id: "PLhVbeWQ4ifDqCwqe1J_cOPHScfXTH61mW",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLsUDz0HZFJ_iT97Fw1gDwXaTruX1vg8VP",
    type: "videos",
    icon: "bowling-ball",
    name: "Videos",
    playlist_id: "PLsUDz0HZFJ_iT97Fw1gDwXaTruX1vg8VP",
    selected_category: false,
    lockable: true,
    content: [],
  },

  {
    category_id: "PLAAtVGzcwwqu52ifLxs676dpqIC22R9N6",
    type: "videos",
    icon: "cloud",
    name: "Videos",
    playlist_id: "PLAAtVGzcwwqu52ifLxs676dpqIC22R9N6",
    selected_category: false,
    lockable: true,
    content: [],
  },

  //Ramdom Videos
  {
    category_id: "PLGksl3C66HzBwfX8cGqFie9xMEGpbNbSD",
    type: "videos",
    icon: "cloud",
    name: "Videos",
    playlist_id: "PLGksl3C66HzBwfX8cGqFie9xMEGpbNbSD",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLDbfUubHhy_Wvtwl53THwxeEJk_1BW6Qi",
    type: "videos",
    icon: "cloud",
    name: "Videos",
    playlist_id: "PLDbfUubHhy_Wvtwl53THwxeEJk_1BW6Qi",
    selected_category: false,
    lockable: true,
    content: [],
  },

  //Toys / Games
  {
    category_id: "PLr0VOOdU7GHzprDqUyO29RVnXnXL9nta5",
    type: "videos",
    icon: "fort-awesome",
    name: "Videos",
    playlist_id: "PLr0VOOdU7GHzprDqUyO29RVnXnXL9nta5",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLZHdY_46KnYuY7kUUXm__NrLMEll8IGGX",
    type: "videos",
    icon: "fort-awesome",
    name: "Videos",
    playlist_id: "PLZHdY_46KnYuY7kUUXm__NrLMEll8IGGX",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PL8a64Cjzx7DlRDMezN5gQtrGBxOBfQE01",
    type: "videos",
    icon: "fort-awesome",
    name: "Videos",
    playlist_id: "PL8a64Cjzx7DlRDMezN5gQtrGBxOBfQE01",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLpz9XxgR0BiUbRJS0XN6IjYYuSOFNge2c",
    type: "videos",
    icon: "fort-awesome",
    name: "Videos",
    playlist_id: "PLpz9XxgR0BiUbRJS0XN6IjYYuSOFNge2c",
    selected_category: false,
    lockable: true,
    content: [],
  },

  // National Geographic
  {
    category_id: "PLQlnTldJs0ZTLL3_CbqRfzyBeXQOQrw2d",
    type: "videos",
    icon: "fish",
    name: "Videos",
    playlist_id: "PLQlnTldJs0ZTLL3_CbqRfzyBeXQOQrw2d",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLQlnTldJs0ZSjGHk8lsyV4Sdrs73wUv3Y",
    type: "videos",
    icon: "wolf-pack-battalion",
    name: "Videos",
    playlist_id: "PLQlnTldJs0ZSjGHk8lsyV4Sdrs73wUv3Y",
    selected_category: false,
    lockable: true,
    content: [],
  },
  {
    category_id: "PLwSl4pifg_WwWHOScXD-HG-VVEesSPDDU",
    type: "videos",
    icon: "globe-americas",
    name: "Videos",
    playlist_id: "PLwSl4pifg_WwWHOScXD-HG-VVEesSPDDU",
    selected_category: false,
    lockable: true,
    content: [],
  },

  //Screen Savers
  {
    category_id: "PLHGu0FqnGwUp25bJWb_IN8TiO_yEGvz9A",
    type: "videos",
    icon: "bed",
    name: "Videos",
    playlist_id: "PLHGu0FqnGwUp25bJWb_IN8TiO_yEGvz9A",
    selected_category: false,
    lockable: false,
    content: [],
  },
  {
    category_id: "PLbRP_jCPjkGi1o-EFwGjNwHCz6mlvMiro",
    type: "videos",
    icon: "bed",
    name: "Videos",
    playlist_id: "PLbRP_jCPjkGi1o-EFwGjNwHCz6mlvMiro",
    selected_category: false,
    lockable: false,
    content: [],
  },
  {
    category_id: "PL5pULUCx2Ch2ycKDVQjKyOos9o0T4Dibv",
    type: "videos",
    icon: "bed",
    name: "Videos",
    playlist_id: "PL5pULUCx2Ch2ycKDVQjKyOos9o0T4Dibv",
    selected_category: false,
    lockable: false,
    content: [],
  },
];

export default testData;
