import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";
import tour from "images/menu/tour.webp";
import ticket from "images/menu/ticket.webp";
import hotel from "images/menu/hotel.webp";
import car from "images/menu/car.webp";
import more from "images/menu/more.webp";
const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipN3-_0wrzFsf30vYg5nR6mwLroFyNp-qYsnV6B6=w540-h312-n-k-no",
    title: "Hà Nội",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQu0B8E2iXW_zJrIIa55l706a8umjbqX5VZik5WJTwjUezeHDIrop6ieDQckRLVbGTPOpm6JGbAqT8XcgIdTRW22ArZUMDW",
    title: "TP Hồ Chí Minh",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTjCNG_QoeQdCYaEnMB5-Ctsse5KuFrV9e70yQh2FzrtaVwZAEDK---b-Djca7oqELV3Xs7-NY8CkXWac5ndjBWIWbUb6-Z",
    title: "Đà Nẵng",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRI8Gvcsg47HzJ627VmWJnWHLV_93PSs2xMcE2u9tI2fo4kkqjqROEd5yD861LXMTKUcw4mHCGxLSXN5xAj74BDHp0KeCqT",
    title: "Hạ Long",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPRSeurs7ihl5advBN4MRgMRGlDIlMYXoOIuP74=w540-h312-n-k-no",
    title: "Phú Quốc",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTs0GDcFqwlhdCVdhBQfqZS2p290tjkoP3V0Tw_UEDAM3n4cli7wTas5j4X6NZ_EN8NLDUINajXevxuk5DViH9cCqIGE65x",
    title: "Nha Trang",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh6.googleusercontent.com/proxy/JZPEjbjYoFqQpsIOftGUwPUz-77_sv2lLGLFr5sP7VTtOZooprREfUFmqTmo8XHxCRQOw7guF-vGLthg4QgA-T1aerde2K1PQrwZrcpkxcjKCXeKxaVikYtXTiDUgPOch0Gr2UDSDoIEYGNh2-OQSZB5LzBSbA=w540-h312-n-k-no",
    title: "Hội An",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNU7XsjaroyEvNAdMz00RLzL6QVeMEqJFZHt5cU=w540-h312-n-k-no",
    title: "Sapa",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSchjsugz-aoCvI45LNwI3HdR5FQIUZ6-NKUWD-WlhtvrUXT1STzF6wPsD7fQ9NJJL5pDfcY7Io2WEmk6YwQLyFCLFCP9OY",
    title: "Đà Lạt",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTUxxEbbXKswdsvn6x5CyClnqUPEWWZSYhB3YLckvtlhdJxf-pMFNrZdmncTvbjDATqYUqvElOp1wbbtB89tFwTcUp_79AA",
    title: "Huế",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRQm5ffdvMXJefkwTX_H0yjmE7wPZLhAbWXD0B6sCmtKhQD_GNazezM38gQcbHE9McQlt1wPrZApjtHz0IMJqgSBv2kreGg",
    title: "Ninh Bình",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNRmDvork--5JWkGhtM4xJU6HmcdNlq6eK41DvF=w540-h312-n-k-no",
    title: "Vũng Tàu",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdOaBuPtXq-9ETAPMgNtHVD1AzH09S3tHcA&usqp=CAU",
    title: "Côn Đảo",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/proxy/0diPJjN9qaBKIKjeTUrLa0xZe_U54nyoPCCgX06VT_jXy4aA2Dpxw4uBxvDXdAxQl5cR_rY3ehxQXpggIiusgS-IgDnR6KxuspMjsNH1ybaz7ioWvtwZZH_4OCZ8oQpeaGf5_VRMyR8pbeDTAev1qIePUCD6Vw=w540-h312-n-k-no",
    title: "Tokyo",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOtUzHxfhjNLwjGZPbiDIvfa77VJmx-KcxdupzX=w540-h312-n-k-no",
    title: "Hồng Kông",
    items: [],
  },
  {
    id: ncNanoId(),
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMtbCUe8AsWobahGfb2chQgt5Gne9VjaIDrUVjf=w540-h312-n-k-no",
    title: "Singapore",
    items: [],
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online Booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real Estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Home - 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Taxi",
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Xe buýt",
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Thuê xe tự lái",
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Tour",
  },
  //
  { id: ncNanoId(), href: "/city/hanoi", name: "Du thuyền" },
  { id: ncNanoId(), href: "/city/hanoi", name: "Phiêu lưu & Khám phá thiên nhiên" },
  //
  { id: ncNanoId(), href: "/city/hanoi", name: "Hoạt động dưới nước" },
  { id: ncNanoId(), href: "/city/hanoi", name: "Trải Nghiệm văn hóa" },
  { id: ncNanoId(), href: "/city/hanoi", name: "Massage & Suối nước nóng" },
];
const megaMenuAll: MegamenuItem[] = [
  {
    id: ncNanoId(),
    title: "Tour & Trải nghiệm",
    icon: tour,
    items: __megamenu.tour.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i,
    })),
  },
  {
    id: ncNanoId(),
    title: "Vé tham quan",
    icon: ticket,
    items: __megamenu.ticket.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i,
    })),
  },
  {
    id: ncNanoId(),
    title: "Lưu trú",
    icon: hotel,
    items: __megamenu.hotel.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i,
    })),
  },
  {
    id: ncNanoId(),
    title: "Di chuyển",
    icon: car,
    items: __megamenu.car.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i,
    })),
  },
  {
    id: ncNanoId(),
    icon: more,
    title: "Thêm nhiều khám phá",
    items: __megamenu.more.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i,
    })),
  },
];
export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/TripMe",
    name: "Bạn muốn đi đâu?",
    type: "megaMenu",
    icon: true,
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Tất cả",
    type: "megaMenu",
    isNew: true,
    megaMenu: megaMenuAll,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Tour và Trải nghiệm",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Khách sạn",
    type: "none",
    // children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Đặt xe",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Máy bay",
    type: "none",
    // children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Ẩm thực",
    type: "none",
    // children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/city/hanoi",
    name: "Dịch vụ du lịch",
    type: "none",
    // children: otherPageChildMenus,
  },
];
