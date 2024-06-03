import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  const [{playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>

        <img className='app_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'

        alt='' />

        <SidebarOptions Icon={HomeIcon} option="Home" />
        <SidebarOptions Icon={SearchIcon} option="Search" />
        <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />

        <br />
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
          <SidebarOptions option={playlist.name} />
        ))}

        <SidebarOptions option = 'hip hop'/> 
        <SidebarOptions option="hello" />
        <SidebarOptions option="songggg" />
    </div>
  )
}

export default Sidebar