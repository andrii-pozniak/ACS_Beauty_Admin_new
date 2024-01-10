import styles from './Orders.module.scss'
import AdminLayout from "../../layouts/AdminLayout";
import SearchInput from "../../components/ToolsPanel/SearchInput/SearchInput";
import Select from "../../components/ToolsPanel/Select/Select";
import FilterIcon from "../../images/svg/FilterIcon";
import DataTable from "../../components/Table/Table";
import ExportButton from "../../components/ToolsPanel/ExportButton/ExportButton";

const filteringOptions = ["Статус", "Спосіб доставки", "Спосіб оплати"];

const columns = [
    {field: "id", headerName: "№", width: 60},
    {field: "customer", headerName: "Клієнт", width: 120},
    {field: "total", headerName: "Сума", width: 80},
    {
        field: "status", headerName: "Статус", width: 110, renderCell: (params: { value: any }) => (
            <span style={{color: getStatusColor(params.value)}}>{params.value}</span>),
    },
    {field: "deliveryMethod", headerName: "Спосіб доставки", width: 140},
    {field: "waybill", headerName: "ТТН", width: 140},
    {field: "comments", headerName: "Коментарі", width: 140},
    {field: "additionDate", headerName: "Додано", width: 130},
];

const rows = [
    {
        id: 34561,
        customer: "Кузьменко М.",
        total: "1256грн",
        status: "Оплачено",
        deliveryMethod: "Нова пошта",
        waybill: "2045678567890",
        comments: "Будь-ласка відправте",
        additionDate: "12.06.2023"
    },
    {
        id: 34562,
        customer: "Кузьменко М.",
        total: "1256грн",
        status: "Виконано",
        deliveryMethod: "Нова пошта",
        waybill: "2045678567890",
        comments: "Будь-ласка відправте",
        additionDate: "12.06.2023"
    },
    {
        id: 34563,
        customer: "Кузьменко М.",
        total: "1256грн",
        status: "Скасовано",
        deliveryMethod: "Нова пошта",
        waybill: "2045678567890",
        comments: "Будь-ласка відправте",
        additionDate: "12.06.2023"
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "Hoве":
            return "black";
        case "Прийнято":
            return "orange";
        case "Оплачено":
            return "green";
        case "Виконано":
            return "orange";
        case "Скасовано":
            return "red";
        default:
            return "black";
    }
};

const Orders = () => {
    const handleEdit = (id: number) => {
        console.log(`Edit order with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete order with id: ${id}`);
    };
    return (
        <AdminLayout>
            <main className={styles.main}>
                <section className={styles.main__section}>
                    <div className={styles.main__title}>
                        <h2 className={styles.main__title_text}>Замовлення</h2>
                    </div>
                    <div className={styles.main__user_search}>
                        <div className={styles.features}>
                            <SearchInput/>
                            <div className={styles.tools}>
                                <Select
                                    options={filteringOptions}
                                    icon={<FilterIcon/>}
                                    toolName={"Фільтрувати"}
                                />
                                <ExportButton columns={columns} rows={rows}/>
                            </div>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        rows={rows}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </AdminLayout>
    )
}

export default Orders
