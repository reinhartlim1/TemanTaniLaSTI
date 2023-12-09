'use client'
import { usePathname } from "next/navigation";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import Image from "next/image";
import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Sidebar(){
    return (
        <div className="container">
            {/* <Sidebar/> */}
            <div className="sidebar" style={{height:"100%"}}>       
            <Link href="/">
              <Image style={{alignItems: 'center', margin: '50px 70px'}}
                src={"/teman-tani.png"}
                alt="Teman Tani"
                className="image"
                width="96"
                height="97"
              />
              </Link>

              <Link href="/material">
              <Button colorScheme='orange' variant='ghost' style={{alignItems: 'center', margin: '20px 10px'}}>
              <div className="material" style={{margin: '0px 30px'}}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 -3.44904e-06L0 1.5L3.3 6.1215C3.43893 6.31611 3.62236 6.4747 3.83502 6.58402C4.04768 6.69335 4.28339 6.75026 4.5225 6.75H4.6275C4.82472 6.74984 5.02003 6.78858 5.20226 6.864C5.3845 6.93941 5.55007 7.05002 5.6895 7.1895L9.702 11.202L5.7765 15.183C5.10509 14.9854 4.39686 14.9469 3.708 15.0706C3.01913 15.1944 2.36858 15.477 1.80795 15.896C1.24732 16.3149 0.792031 16.8588 0.478205 17.4844C0.164379 18.11 0.000648302 18.8001 0 19.5C0.000899195 20.1449 0.140406 20.7821 0.409067 21.3684C0.677729 21.9547 1.06927 22.4763 1.55716 22.8981C2.04505 23.3198 2.61789 23.6318 3.23687 23.8128C3.85586 23.9938 4.50652 24.0397 5.14477 23.9473C5.78303 23.8549 6.39396 23.6264 6.93619 23.2772C7.47842 22.9281 7.93926 22.4665 8.28751 21.9237C8.63576 21.3809 8.86326 20.7696 8.95462 20.1312C9.04597 19.4928 8.99904 18.8422 8.817 18.2235L12.798 14.298L14.25 15.75L13.7925 17.121C13.7046 17.3853 13.692 17.6688 13.7561 17.9398C13.8202 18.2108 13.9585 18.4586 14.1555 18.6555L19.1895 23.6895C19.4708 23.9707 19.8523 24.1287 20.25 24.1287C20.6477 24.1287 21.0292 23.9707 21.3105 23.6895L23.6895 21.3105C23.9707 21.0292 24.1287 20.6477 24.1287 20.25C24.1287 19.8522 23.9707 19.4708 23.6895 19.1895L18.6555 14.1555C18.4586 13.9585 18.2108 13.8202 17.9398 13.7561C17.6688 13.692 17.3853 13.7046 17.121 13.7925L15.75 14.25L14.31 12.81L18.33 8.8455C18.9969 9.02351 19.6957 9.046 20.3727 8.91121C21.0496 8.77643 21.6866 8.48799 22.2344 8.06812C22.7823 7.64826 23.2264 7.10818 23.5325 6.48954C23.8386 5.8709 23.9985 5.19023 24 4.5C24 4.0965 23.9475 3.705 23.847 3.3345L20.637 6.546L18 6L17.454 3.3645L20.6655 0.152997C19.9015 -0.0524116 19.0969 -0.052795 18.3328 0.151885C17.5686 0.356565 16.8719 0.759074 16.3129 1.31884C15.7539 1.87861 15.3524 2.57585 15.1487 3.34028C14.9451 4.10471 14.9466 4.90932 15.153 5.673L11.193 9.69L7.1895 5.6895C6.90818 5.40826 6.75008 5.02679 6.75 4.629V4.5225C6.75002 4.28364 6.693 4.04822 6.58368 3.83585C6.47437 3.62347 6.31591 3.44027 6.1215 3.3015L1.5 -3.44904e-06ZM15.969 15.969C16.0387 15.8992 16.1214 15.8437 16.2126 15.8059C16.3037 15.7681 16.4013 15.7487 16.5 15.7487C16.5987 15.7487 16.6963 15.7681 16.7874 15.8059C16.8786 15.8437 16.9613 15.8992 17.031 15.969L21.531 20.469C21.6007 20.5387 21.656 20.6215 21.6938 20.7126C21.7315 20.8037 21.7509 20.9014 21.7509 21C21.7509 21.0986 21.7315 21.1963 21.6938 21.2874C21.656 21.3785 21.6007 21.4613 21.531 21.531C21.4613 21.6007 21.3785 21.656 21.2874 21.6938C21.1963 21.7315 21.0986 21.7509 21 21.7509C20.9014 21.7509 20.8037 21.7315 20.7126 21.6938C20.6215 21.656 20.5387 21.6007 20.469 21.531L15.969 17.031C15.8992 16.9613 15.8437 16.8786 15.8059 16.7874C15.7681 16.6963 15.7487 16.5986 15.7487 16.5C15.7487 16.4013 15.7681 16.3037 15.8059 16.2125C15.8437 16.1214 15.8992 16.0387 15.969 15.969ZM4.5 16.5L5.2065 16.863L6 16.902L6.4305 17.5695L7.098 18L7.137 18.7935L7.5 19.5L7.137 20.2065L7.098 21L6.4305 21.4305L6 22.098L5.2065 22.137L4.5 22.5L3.7935 22.137L3 22.098L2.5695 21.4305L1.902 21L1.863 20.2065L1.5 19.5L1.863 18.7935L1.902 18L2.5695 17.5695L3 16.902L3.7935 16.863L4.5 16.5Z"
                    fill="#9C4221"
                  />
                </svg>
                <h1>Material</h1>
              </div>
              </Button>
              </Link>

              <Link href="/pemesanan">
              <Button colorScheme='orange' variant='ghost' style={{alignItems: 'center', margin: '20px 10px'}}>
              <div className="order" style={{margin: '0px 50px 0px 30px'}}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 1.5C0.551088 1.5 0.360322 1.57902 0.21967 1.71967C0.0790176 1.86032 0 2.05109 0 2.25C0 2.44891 0.0790176 2.63968 0.21967 2.78033C0.360322 2.92098 0.551088 3 0.75 3H2.415L3.0165 5.4105L5.2635 17.388C5.29567 17.5599 5.38688 17.7151 5.52137 17.8268C5.65585 17.9386 5.82515 17.9998 6 18H7.5C6.70435 18 5.94129 18.3161 5.37868 18.8787C4.81607 19.4413 4.5 20.2044 4.5 21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21C10.5 20.2044 10.1839 19.4413 9.62132 18.8787C9.05871 18.3161 8.29565 18 7.5 18H18C17.2044 18 16.4413 18.3161 15.8787 18.8787C15.3161 19.4413 15 20.2044 15 21C15 21.7956 15.3161 22.5587 15.8787 23.1213C16.4413 23.6839 17.2044 24 18 24C18.7957 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21C21 20.2044 20.6839 19.4413 20.1213 18.8787C19.5587 18.3161 18.7957 18 18 18H19.5C19.6749 17.9998 19.8442 17.9386 19.9786 17.8268C20.1131 17.7151 20.2043 17.5599 20.2365 17.388L22.4865 5.388C22.5068 5.27976 22.5029 5.16838 22.4753 5.06178C22.4477 4.95518 22.3969 4.85597 22.3266 4.77121C22.2563 4.68644 22.1682 4.6182 22.0685 4.57133C21.9689 4.52445 21.8601 4.5001 21.75 4.5H4.335L3.7275 2.0685C3.68701 1.90618 3.59342 1.76205 3.4616 1.65904C3.32978 1.55603 3.1673 1.50005 3 1.5H0.75ZM9 21C9 21.3978 8.84196 21.7794 8.56066 22.0607C8.27936 22.342 7.89783 22.5 7.5 22.5C7.10218 22.5 6.72065 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21C6 20.6022 6.15804 20.2206 6.43934 19.9393C6.72065 19.658 7.10218 19.5 7.5 19.5C7.89783 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21ZM19.5 21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21C16.5 20.6022 16.658 20.2206 16.9393 19.9393C17.2206 19.658 17.6022 19.5 18 19.5C18.3978 19.5 18.7794 19.658 19.0607 19.9393C19.342 20.2206 19.5 20.6022 19.5 21ZM17.031 9.531L12.531 14.031C12.4613 14.1008 12.3786 14.1563 12.2875 14.1941C12.1963 14.2319 12.0987 14.2513 12 14.2513C11.9014 14.2513 11.8037 14.2319 11.7126 14.1941C11.6214 14.1563 11.5387 14.1008 11.469 14.031L9.219 11.781C9.14927 11.7113 9.09395 11.6285 9.05622 11.5374C9.01848 11.4463 8.99905 11.3486 8.99905 11.25C8.99905 11.1514 9.01848 11.0537 9.05622 10.9626C9.09395 10.8715 9.14927 10.7887 9.219 10.719C9.28873 10.6493 9.37152 10.594 9.46263 10.5562C9.55373 10.5185 9.65139 10.4991 9.75 10.4991C9.84862 10.4991 9.94627 10.5185 10.0374 10.5562C10.1285 10.594 10.2113 10.6493 10.281 10.719L12 12.4395L15.969 8.469C16.0387 8.39927 16.1215 8.34395 16.2126 8.30621C16.3037 8.26848 16.4014 8.24905 16.5 8.24905C16.5986 8.24905 16.6963 8.26848 16.7874 8.30621C16.8785 8.34395 16.9613 8.39927 17.031 8.469C17.1007 8.53873 17.156 8.62152 17.1938 8.71262C17.2315 8.80373 17.2509 8.90138 17.2509 9C17.2509 9.09862 17.2315 9.19627 17.1938 9.28738C17.156 9.37848 17.1007 9.46127 17.031 9.531Z"
                    fill="#9C4221"
                  />
                </svg>
                <h1>Order</h1>
              </div>
              </Button>
              </Link>
            </div>
          </div>
    )
}