import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1659245350/Images/2_The-cons-of-the-word-_ALL_cnl8zr.gif"
  },
  {
    _id: uuid(),
    categoryName: "Games",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1652628177/Images/no-mans-sky-1621906996170_hguwaw.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Controller",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1652637547/Images/l-intro-1645209424_msay4q.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1652638383/Images/https___hybrismediaprod.blob.core.windows.net_sys-master-phoenix-images-container_hd3_h57_9081222660126_RZ04-02670100-R3U1-0_yxptea.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Console",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1652639014/Images/dYpWGqygVSVet396ZyNHWZ_ek2ecn.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Other",
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1659245447/Images/other-design-amped-logo_r1a2ee.png"
  },
];
