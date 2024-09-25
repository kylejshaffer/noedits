import { VStack, Image } from '@chakra-ui/react'
import bandcamp from '../assets/Bandcamp_logo.png'
import applemusic from '../assets/Apple_Music_logo.png'
import instagram from '../assets/Instagram_logo.png'
import spotify from '../assets/Spotify_Primary_Logo_RGB_White.png'
import betterdays from '../assets/bdwhy-astro-filled.png'
import email from '../assets/email.png'

const Socials = () => {
  return (
    <VStack spacing={4}
     className="sidebar">
        <a href="https://noeditsband.bandcamp.com/album/we-all-end-up-the-same" target="_blank" rel="noopener noreferrer">
            <Image src={bandcamp} boxSize="35px" alt="bandcamp" className='socialicon'/>
        </a>
        <a href="https://geo.music.apple.com/us/album/_/1762195645?app=music&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&ls=1&mt=1" target="_blank" rel="noopener noreferrer">
            <Image src={applemusic} boxSize="35px" alt="applemusic" className='socialicon'/>
        </a>
        <a href="https://open.spotify.com/album/4OYS7mFnw5RanTyY8ZVoIR?utm_medium=share&utm_source=linktree" target="_blank" rel="noopener noreferrer">
            <Image src={spotify} boxSize="35px" alt="spotify" className='socialicon'/>
        </a>
        <a href="https://instagram.com/noeditsband" target="_blank" rel="noopener noreferrer">
            <Image src={instagram} boxSize="35px" alt="instagram" className='socialicon'/>
        </a>
        <a href="https://betterdayswillhauntyou.com/" target="_blank" rel="noopener noreferrer">
            <Image src={betterdays} boxSize="35px" alt="better-days-will-haunt-you" className='socialicon'/>
        </a>
        <a href="mailto: noeditsband@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={email} boxSize="35px" alt="email" className='socialicon'/>
        </a>
    </VStack>
  )
}

export default Socials;