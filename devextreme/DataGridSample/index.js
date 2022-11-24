$(function() {
    $("#dataGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: "EmployeeID",

        columns : [{
            dataField: 'EmployeeID',
            caption: '작업자ID',
        },
        {
            dataField: 'FullName',
        },
        {
            dataField: 'Position',
        },]
    });
});