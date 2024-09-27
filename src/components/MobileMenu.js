import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
       <>
        <IconButton icon={<HamburgerIcon/>} variant='outline' color='white' onClick={onOpen}>
            Open
        </IconButton>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} color='black'>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerBody>
                <p className='drawerText'>
                    <a href="https://noeditsband.bandcamp.com/album/we-all-end-up-the-same" target="_blank" rel="noopener noreferrer">
                    Bandcamp
                    </a>
                </p>
                <p className='drawerText'>
                    <a href="https://geo.music.apple.com/us/album/_/1762195645?app=music&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&ls=1&mt=1" target="_blank" rel="noopener noreferrer">
                    Apple Music
                    </a>
                </p>
                <p className='drawerText'>
                    <a href="https://open.spotify.com/album/4OYS7mFnw5RanTyY8ZVoIR?utm_medium=share&utm_source=linktree" target="_blank" rel="noopener noreferrer">
                    Spotify
                    </a>
                </p>
                <p className='drawerText'>
                    <a href="https://instagram.com/noeditsband" target="_blank" rel="noopener noreferrer">
                    Instagram
                    </a>
                </p>
                <p className='drawerText'>
                    <a href="https://betterdayswillhauntyou.com/" target="_blank" rel="noopener noreferrer">
                    Better Days</a>
                </p>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
       </>
    )
}

export default MobileMenu;