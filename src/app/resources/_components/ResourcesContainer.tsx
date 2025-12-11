import React from 'react'
import ResourcesHeader from './ResourcesHeader'
import ToolsResourcesSection from '@/modules/shared/toolsResources/ToolsResourcesSection'

export default function ResourcesContainer() {
    return (
        <>
            <ResourcesHeader />
            <ToolsResourcesSection className='bg-transparent' length={6}></ToolsResourcesSection>
        </>
    )
}
