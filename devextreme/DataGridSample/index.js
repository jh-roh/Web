$(function() {
    $("#dataGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: "EmployeeID",

        columns : [{
            dataField: 'EmployeeID',
            caption: 'ìììID',
        },
        {
            dataField: 'FullName',
        },
        {
            dataField: 'Position',
        },]
    });
});