import bandcamp from '../assets/Bandcamp_logo.png'
import applemusic from '../assets/Apple_Music_logo.png'
import instagram from '../assets/Instagram_logo.png'
import spotify from '../assets/Spotify_Primary_Logo_RGB_White.png'
import betterdays from '../assets/bdwhy-astro-filled.png'
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const MobileMenu = () => {
    return (
        /* <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon/>}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={bandcamp} command='⌘T'>
                Bandcamp
                </MenuItem>
                <MenuItem icon={applemusic} command='⌘N'>
                Apple Music
                </MenuItem>
                <MenuItem icon={spotify} command='⌘⇧N'>
                Spotify
                </MenuItem>
                <MenuItem icon={instagram} command='⌘O'>
                Instagram
                </MenuItem>
                <MenuItem icon={betterdays} command='⌘O'>
                Better Days
                </MenuItem>
            </MenuList>
        </Menu> */
        <Menu>
            <MenuButton
             as={IconButton}
             aria-label='Options'
             icon={<HamburgerIcon/>}
            />
            <MenuList>
                <MenuItem>Bandcamp</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MobileMenu;