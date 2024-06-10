import { FaceBookIcon, InstaIcon, LinkDinIcon, TwitterIcon } from "./Icons"


export const footerLinks = {
    column1: [
        { link: "About Us" },
        { link: "Our Services" },
        { link: "Why choose Us" },
        { link: "Testimonials" },
        { link: "Contact Us" },
    ],
    column2: [
        { link: "Privacy Policy" },
        { link: " Privacy settings" },
        { link: "Terms and conditions" },
    ]
}
export const footerSocialIcons = [
    {
        icon: <FaceBookIcon />,
        path:"https://www.facebook.com/login/"
     },
    {
        icon: <TwitterIcon />,
        path:"https://twitter.com"
    },
    {
        icon: <LinkDinIcon />,
        path:"https://www.linkedin.com"
    },
    {
        icon: <InstaIcon />,
       path:"https://www.linkedin.com"
   }
]

