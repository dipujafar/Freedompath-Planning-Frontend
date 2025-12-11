import AssociatesMemberCard from "./AssociatesMemberCard";
import { associatesMemberData } from "./associatesMemberData";



export default function AssociatesMemberContainer() {
    return (
        <>
            {
                associatesMemberData.map((member) => (
                    <AssociatesMemberCard key={member?.id} member={member} />
                ))
            }
        </>
    )
}
