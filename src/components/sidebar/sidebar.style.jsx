import styled, {css} from 'styled-components';

const Display = css`
    display: flex;
    padding: 20px;
    align-items: center;
`

export const SidebarContainer = styled.div`
    background: #17a7c2;
    position: fixed;
    width: 70px;
    height: 100vh;
    color: white;
    padding: 30px 0px;
    transition: all 0.2s ease-in;
    z-index: 9999;

    &.visible {
        width : 300px;
    }

    &.content-show .sidebar-content {
        display : block;
    }

    &.content-hide .sidebar-content {
        display : none;
    }

    &.hidden {
        width : 70px;
    }

    .sidebar-content {
        display : none;
        transition : all 0.4s ease-in;
    }


    #arrow {
        transition: all 0.3s ease-in;
    }
    
    &:hover #arrow {
        transform: rotate(180deg);
    }

    @media(max-width:1200px) {   
        width: 0px;

        &.sm-hidden {
            width : 0px!important;

            #sidebar-inner {
                display : none!important;
            }
        }
        
        h1 {
            font-size : 2rem!important;
        }

        #arrow {
            transform : rotate(180deg)
        }

        &:hover #arrow {
            transform: rotate(180deg);
        }

        #arrow, .menu-icon {
            font-size : 1.4rem!important;
        }

        .lead {
            font-size : 1.4rem!important;
            left : 60px!important;
        }

        &.visible, &.hidden {
            width : 280px;

            #sidebar-inner, .sidebar-content {
                display: block;
            }
        }
    }
`

export const SidebarInnerContainer = styled.div`
    @media(max-width:1200px) {
        display: none;
    }
`

export const SidebarMenuItem = styled.div`
    ${Display}
    &:hover {
        background-color: #178599;
        cursor: pointer;
    }

    .lead {
        position: absolute;
        left: 80px;
        padding: 0;
        margin-bottom: 0;
        font-size: 1.5rem;
        text-decoration: none;
        color: white;
    } 
`

export const SidebarHeader = styled.div`
    ${Display}

    h1 {
        margin-left: 30px;

        @media(max-width: 1200px) {
            margin-left: 20px;
            padding: 10px 0px;
        }
    }

    @media(max-width : 1200px) {
        padding: 0px 20px;
    }
`