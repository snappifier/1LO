import {NavigationMenu} from '@base-ui-components/react/navigation-menu';
import { Link as RouterLink } from 'react-router';
import {useSuspenseQuery} from "@tanstack/react-query";
import {get} from "../../features/fetcher.jsx";


export default function DropdownNew() {

    const uczen = useSuspenseQuery({
        queryKey: ["uczen"],
        queryFn: () =>
            get(
                "menu-uczens?populate=*&sort=rank:asc"
            ),
    });
    const szkola = useSuspenseQuery({
        queryKey: ["szkola"],
        queryFn: () =>
            get(
                "menu-szkolas?populate=*&sort=rank:asc"
            ),
    });
    const aktualnosci = useSuspenseQuery({
        queryKey: ["aktualnosci"],
        queryFn: () =>
            get(
                "menu-aktualnoscis?populate=*&sort=rank:asc"
            ),
    });
    const dokumenty = useSuspenseQuery({
        queryKey: ["dokumenty"],
        queryFn: () =>
            get(
                "menu-dokumenties?populate=*&sort=rank:asc"
            ),
    });
    const uczniowieLinks = uczen.data?.data || [];
    const oSzkoleLinks = szkola.data?.data || [];
    const aktualnosciLinks = aktualnosci.data?.data || [];
    const dokumentyLinks = dokumenty.data?.data || [];

    return (
        <NavigationMenu.Root className="font-[poppins] min-w-max rounded-lg bg-transparent p-1 text-white">
            <NavigationMenu.List className="relative flex">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClassName}>
                        Szkoła
                        <NavigationMenu.Icon
                            className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon/>
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className={contentClassName}>
                        <ul className="grid list-none grid-cols-5 gap-0">
                            {oSzkoleLinks.map((item) => (
                                <li key={item["Link"]}>
                                    <Link href={item["Link"]} className={linkCardClassName}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-normal">{item["Tytul"]}</h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">{item["Opis"]}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClassName}>
                        Uczeń
                        <NavigationMenu.Icon
                            className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon/>
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className={contentClassName}>
                        <ul className="grid list-none grid-cols-4 gap-0 xs:grid-cols-[12rem_12rem]">
                            {uczniowieLinks.map((item) => (
                                <li key={item["Link"]}>
                                    <Link href={item["Link"]} className={linkCardClassName}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-normal">{item["Tytul"]}</h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">{item["Opis"]}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClassName}>
                        Aktualności
                        <NavigationMenu.Icon
                            className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon/>
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className={contentClassName}>
                        <ul className="grid list-none grid-cols-4 gap-0 xs:grid-cols-[12rem_12rem]">
                            {aktualnosciLinks.map((item) => (
                                <li key={item["Link"]}>
                                    <Link href={item["Link"]} className={linkCardClassName}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-normal">{item["Tytul"]}</h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">{item["Opis"]}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClassName}>
                        Dokumenty
                        <NavigationMenu.Icon
                            className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon/>
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className={contentClassName}>
                        <ul className="grid list-none grid-cols-3 gap-0 xs:grid-cols-[12rem_12rem]">
                            {dokumentyLinks.map((item) => (
                                <li key={item["Link"]}>
                                    <Link href={item["Link"]} className={linkCardClassName}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-normal">{item["Tytul"]}</h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">{item["Opis"]}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                {/*<NavigationMenu.Item>*/}
                {/*    <RouterLink className={triggerClassName} to="/kontakt">*/}
                {/*        Kontakt*/}
                {/*    </RouterLink>*/}
                {/*</NavigationMenu.Item>*/}
                {/*<NavigationMenu.Item>*/}
                {/*    <RouterLink className={triggerClassName} to="/rekrutacja">*/}
                {/*        E-dziennik*/}
                {/*    </RouterLink>*/}
                {/*</NavigationMenu.Item>*/}
                {/*<NavigationMenu.Item>*/}
                {/*    <RouterLink className={triggerClassName} to="/rekrutacja">*/}
                {/*        Panel*/}
                {/*    </RouterLink>*/}
                {/*</NavigationMenu.Item>*/}

                {/*<NavigationMenu.Item>*/}
                {/*    <Link className={triggerClassName} href="https://github.com/mui/base-ui">*/}
                {/*        GitHub*/}
                {/*    </Link>*/}
                {/*</NavigationMenu.Item>*/}
            </NavigationMenu.List>

            <NavigationMenu.Portal>
                <NavigationMenu.Positioner
                    sideOffset={15}
                    collisionPadding={{top: 5, bottom: 5, left: 20, right: 20}}
                    collisionAvoidance={{side: 'none'}}
                    className="box-border z-100 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
                    style={{
                        ['--duration']: '0.35s',
                        ['--easing']: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                >
                    <NavigationMenu.Popup
                        className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 w-[var(--popup-width)] xs:w-[var(--popup-width)] dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                        <NavigationMenu.Arrow
                            className="flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                            <ArrowSvg/>
                        </NavigationMenu.Arrow>
                        <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden"/>
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    );
}

function Link(props) {
    return (
        <NavigationMenu.Link
            render={
                <RouterLink to={props.href}/>
            }
            {...props}
        />
    );
}

function ChevronDownIcon(props) {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
            <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
}

function ArrowSvg(props) {
    return (
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
            <path
                d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                className="fill-[canvas]"
            />
            <path
                d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                className="fill-gray-200 dark:fill-none"
            />
            <path
                d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
                className="dark:fill-gray-300"
            />
        </svg>
    );
}

const triggerClassName =
    'box-border flex items-center justify-center gap-1.5 h-10 ' +
    'px-5 xs:px-3.5 m-0 rounded-md bg-transparent text-gray-50 font-normal ' +
    'text-[0.925rem] xs:text-base leading-6 select-none no-underline ' +
    'hover:bg-[#3077BA] active:bg-[#3077BA] data-[popup-open]:bg-[#3077BA] ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative';

const contentClassName =
    'md:w-[calc(80vw_-_40px)] lg:w-[calc(70vw_-_40px)] xl:w-[calc(50vw_-_40px)] h-full p-6 xs:w-max xs:min-w-[400px] xs:w-max ' +
    'transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ' +
    'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ' +
    'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ' +
    'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ' +
    'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ' +
    'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]';

const linkCardClassName =
    'block rounded-md p-2 xs:p-3 no-underline text-inherit' +
    'hover:bg-gray-100 focus-visible:relative focus-visible:outline focus-visible:outline-2 ' +
    'focus-visible:-outline-offset-1 focus-visible:outline-blue-800';

