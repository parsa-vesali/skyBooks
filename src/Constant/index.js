export const menuCategory = [
    {
        id: 1,
        title: 'برنامه نویسی',
        category: 'programming',
        subMenu: [
            {
                id: 1,
                title: 'زبان ها',
                subMenu: [
                    { id: 1, title: 'payton' },
                    { id: 2, title: 'javaScript' },
                    { id: 3, title: 'C#' },
                ]
            },
            {
                id: 2,
                title: 'فریم ورک ها',
                subMenu: [
                    { id: 1, title: 'React.js' },
                    { id: 2, title: 'Flutter' },
                    { id: 3, title: 'Node.js' },
                ]
            },
            {
                id: 3,
                title: 'دیتا بیس',
                subMenu: [
                    { id: 1, title: 'Data' },
                    { id: 2, title: 'My Sql' },
                    { id: 3, title: 'Sql server' },
                ]
            },
            {
                id: 4,
                title: 'هوش مصونی',
                subMenu: [
                    { id: 1, title: 'Machine Learning' },
                    { id: 2, title: 'Deep Learning' },
                    { id: 3, title: 'Reinforcement' },
                ]
            },
            {
                id: 5,
                title: 'شبکه',
                subMenu: [
                    { id: 1, title: 'network+' },
                    { id: 2, title: 'network' },
                    { id: 3, title: 'A+' },
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'ریاضی',
        category: 'mathematics',
        subMenu: [
            {
                id: 1,
                title: 'جبر و هندسه',
                subMenu: [
                    { id: 1, title: 'جبر' },
                    { id: 2, title: 'هندسه' },
                ]
            },
            {
                id: 2,
                title: 'دیفرانسیل',
                subMenu: [
                    { id: 1, title: 'دیفرانسیل ساده' },
                    { id: 2, title: 'دیفرانسیل جزئی' },
                ]
            },
            {
                id: 3,
                title: 'حسابداری',
                subMenu: [
                    { id: 1, title: 'مقدماتی' },
                    { id: 2, title: 'پیشرفته' },
                ]
            },

            {
                id: 4,
                title: 'آنالیز',
                subMenu: [
                    { id: 1, title: 'آنالیز عددی' },
                    { id: 2, title: 'آنالیز واقعی' },
                ]
            },

        ]
    },
    {
        id: 3,
        title: 'مهندسی',
        category: 'engineering',
        subMenu: [
            {
                id: 1,
                title: 'مکانیک',
                subMenu: [
                    { id: 1, title: 'مکانیک سیالات' },
                    { id: 2, title: 'مکانیک جامدات' },
                ]
            },
            {
                id: 2,
                title: 'برق',
                subMenu: [
                    { id: 1, title: 'مدارهای الکتریکی' },
                    { id: 2, title: 'سیستم‌های قدرت' },
                ]
            },
            {
                id: 3,
                title: 'کامپیوتر',
                subMenu: [
                    { id: 1, title: 'سخت‌افزار' },
                    { id: 2, title: 'نرم‌افزار' },
                ]
            },
        ]
    },
    {
        id: 4,
        title: 'مدیریت',
        category: 'management',
        subMenu: [

        ]
    },
    {
        id: 5,
        title: 'پزشکی',
        category: 'medical',
        subMenu: [
            {
                id: 1,
                title: 'آناتومی',
                subMenu: [
                    { id: 1, title: 'آناتومی عمومی' },
                    { id: 2, title: 'آناتومی اختصاصی' },
                ]
            },
            {
                id: 2,
                title: 'داروسازی',
                subMenu: [
                    { id: 1, title: 'فارماکولوژی' },
                    { id: 2, title: 'داروشناسی' },
                ]
            },
        ]
    },
    {
        id: 6,
        title: 'فیزیک',
        category: 'physics',
        subMenu: []
    },
    {
        id: 7,
        title: 'زبان‌های خارجی',
        category: 'languages',
        subMenu: []
    },
];

export const books = [
    {
        id: 1,
        name: "درک الگوریتم",
        price: 296_000,
        img: '../images/Books/book-1.jpg',
        desc: "راهنمای تصویری برای برنامه نویس‌ها و افراد کنجکاو",
        author: " آدیتیا بهارگاوا،",
        Publisher: "Independently",
        page: 310,
        year: 2023 ,
        language: "Persian" ,
        category: 'programming' ,
        categoryTitle : 'برنامه نویسی',
    },
    {
        id:2 ,
        name: "The Mathematics of Machine Learning",
        price: 238_000,
        img: '../images/Books/book-2.jpg',
        desc: "Lectures on Supervised Methods and Beyond",
        author: "Maria Han Veiga, François Gaston Ged",
        Publisher: "De Gruyter",
        page:290 ,
        year: 2024 ,
        language: "English" ,
        category: 'programming' ,
        categoryTitle : 'برنامه نویسی',
    },
    {
        id: 3,
        name: "Pro Angular 16",
        price:629_000 ,
        img: '../images/Books/book-3.jpg',
        desc: "",
        author: "Adam Freeman",
        Publisher: "Manning",
        page: 848,
        year:  2024,
        language: "English" ,
        category: 'programming' ,
        categoryTitle : 'برنامه نویسی',
    },
    {
        id:4 ,
        name: "Learning React Native",
        price:256_000,
        img: '../images/Books/book-4.jpg',
        desc: "Building Native Mobile Apps with JavaScript",
        author: "Bonnie Eisenman",
        Publisher: "O'Reilly",
        page:242 ,
        year:  2018,
        language: "English" ,
        category: 'programming' ,
        categoryTitle : 'برنامه نویسی',
    },
    {
        id: 5,
        name: "Introduction to Flight",
        price: 830_000 ,
        img: '../images/Books/book-5.jpg',
        desc: "",
        author: "John D. Anderson, Jr., Mary L. Bowden",
        Publisher: "McGraw-Hill",
        page:961 ,
        year:2022,
        language: "English" ,
        category: 'engineering' ,
        categoryTitle : 'مهندسی'
    },
    {
        id: 6,
        name: "Eloquent JavaScript",
        price:370_000  ,
        img: '../images/Books/book-6.jpg',
        desc: "",
        author: "Marijn Haverbeke",
        Publisher: "Independently Published",
        page:201 ,
        year:2024,
        language: "English" ,
        category: 'programming' ,
        categoryTitle : 'برنامه نویسی'
    },
    {
        id: 7,
        name: "Modern English Part 1",
        price: 260_000 ,
        img: '../images/Books/book-7.jpg',
        desc: "Exercises for Non-Native Speakers, Part 1: Parts of Speech",
        author: "Marcella Frank",
        Publisher: "Prentice Hall",
        page:201 ,
        year:1986,
        language: "English" ,
        category: 'languages' ,
        categoryTitle : 'زبان های خارجی'
    },
]


