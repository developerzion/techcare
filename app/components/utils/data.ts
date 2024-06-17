//  =================================================================
//                          Navbar section
// =================================================================

import { HomeIcon, UsersIcon, CalendarIcon, ChatBubbleLeftIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export type TNavbar = {
   icon: any;
   name: string;
   link: string;
   active: boolean;
};

export const navbar: TNavbar[] = [
   { icon: HomeIcon, name: "Overview", link: "#", active: false },
   { icon: UsersIcon, name: "Patients", link: "/", active: true },
   { icon: CalendarIcon, name: "Schedule", link: "#", active: false },
   { icon: ChatBubbleLeftIcon, name: "Message", link: "#", active: false },
   { icon: CreditCardIcon, name: "Transactions", link: "#", active: false },
];
