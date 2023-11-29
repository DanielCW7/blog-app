
import AdminLayout from "../components/adminLayout";
import {NextStudio} from "next-sanity/studio";
import config from "../sanity/sanity.config"

const Admin = () => {
    return (
        <AdminLayout>
            <NextStudio config={config} />
        </AdminLayout>
    )
}

export default Admin