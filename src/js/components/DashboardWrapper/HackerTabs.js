/* export default [
    {
        title: "General",
        links: [{ title: "Home", link: "/" }],
    },
    {
        title: "Forms",
        links: [
            {
                title: "Application",
                link: "/application",
                conditions: ["emailVerified"],
            },
            {
                title: "Confirmation",
                link: "/confirmation",
                conditions: ["emailVerified", "admitted"],
            },
        ],
    },
]; */

const ifVerified = [
    {
        title: "General",
        links: [{ title: "Home", link: "/" }],
    },
    {
        title: "Forms",
        links: [
            {
                title: "Application",
                link: "/application",
                conditions: ["emailVerified"],
            },
        ],
    },
];

const ifCompleted = [
    {
        title: "General",
        links: [{ title: "Home", link: "/" }],
    },
    {
        title: "Forms",
        links: [
            {
                title: "Application",
                link: "/application",
                conditions: ["emailVerified"],
            },
            {
                title: "Team",
                link: "/team",
                conditions: ["emailVerified", "completedProfile"],
            },
        ],
    },
];

const ifAdmitted = [
    {
        title: "General",
        links: [
            { title: "Welcome Page", link: "/welcome" },
            { title: "Application Status", link: "/" },
            { title: "Schedule", link: "/schedule" },
            { title: "Rules", link: "/rules" },
        ],
    },
    {
        title: "Help",
        links: [
            { title: "Discord", link: "/discord" },
            { title: "Hopin", link: "/hopin" },
            {
                title: "Submitting your Project",
                link: "/submitting-your-project",
            },
            { title: "FAQ", link: "/faq" },
        ],
    },
    {
        title: "Forms",
        links: [
            {
                title: "Application",
                link: "/application",
                conditions: ["emailVerified"],
            },
            {
                title: "Confirmation",
                link: "/confirmation",
                conditions: ["emailVerified", "admitted"],
            },
            {
                title: "Team",
                link: "/team",
                conditions: ["emailVerified", "completedProfile"],
            },
        ],
    },
];

export const generateTabs = (profile, emailVerified) => {
    if (profile.admitted) {
        return ifAdmitted;
    } else if (profile.completedProfile) {
        return ifCompleted;
    } else if (emailVerified) {
        return ifVerified;
    } else {
        return [];
    }
};
