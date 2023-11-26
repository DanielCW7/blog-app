
import AdminLayout from "@/utils/adminLayout";
import {NextStudio} from "next-sanity/studio";
import config from "@/sanity.config"

const Admin = () => {
    return (
        <AdminLayout>
            <NextStudio config={config} />
        </AdminLayout>
    )
}

export default Admin