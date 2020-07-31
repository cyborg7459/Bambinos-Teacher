import React from 'react';

import {SidebarContainer, SidebarMenuItem, SidebarHeader, SidebarInnerContainer} from './sidebar.style';

const Sidebar = () => {
    return (
        <SidebarContainer id="sidebar">
            <SidebarInnerContainer id="sidebar-inner">
                <SidebarHeader>
                    <i id="arrow" class="fas fa-arrow-right fa-2x"></i>
                    <h1 class="display-4 p-0 m-0 ml-3 sidebar-content">Bambinos.in</h1>
                </SidebarHeader>
                <hr/>
                <div id="sidebar-menu">
                    <SidebarMenuItem className="sidebar-menu-item">
                        <i class="fas fa-user-edit fa-2x menu-icon"></i>
                        <a class="lead sidebar-content" href="#personal">Personal Information</a>
                    </SidebarMenuItem>
                    <SidebarMenuItem className="sidebar-menu-item">
                        <i class="fas fa-briefcase fa-2x menu-icon"></i>
                        <a class="lead sidebar-content" href="#work">Work & Experience</a>
                    </SidebarMenuItem>
                    <SidebarMenuItem className="sidebar-menu-item">
                        <i class="far fa-address-card fa-2x menu-icon"></i>
                        <a class="lead sidebar-content" href="#profile">Profile Information</a>
                    </SidebarMenuItem>
                </div>
            </SidebarInnerContainer>
        </SidebarContainer>
    )
}

export default Sidebar;