import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [links, setLinks] = useState(sublinks)
    const showSidebar = () => {
        setSidebarOpen(true)
    }

    const hideSidebar = () => {
        setSidebarOpen(false)
    }
    return (
    <GatsbyContext.Provider value={{ isSidebarOpen, links, showSidebar, hideSidebar }}>
        {children}
    </GatsbyContext.Provider>
    )
}

export { GatsbyContext, GatsbyProvider }
