import ResourcesHeader from './ResourcesHeader'
import ToolsResourcesSection from '@/modules/shared/toolsResources/ToolsResourcesSection'
import EBookSection from './EBookSection'

export default function ResourcesContainer() {
    return (
        <>
            <ResourcesHeader />
            <ToolsResourcesSection className='bg-transparent' length={6}></ToolsResourcesSection>
            <EBookSection />
        </>
    )
}
