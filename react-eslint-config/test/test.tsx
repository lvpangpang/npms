import React from "react";

interface IProps {
  list: any;
  actions: any;
}

function OrderList(props: IProps) {
  const state = useSelector((state: any) => state.workOrder);
  const dispatch = useDispatch();
  const { loading, pagination, searchParams, list } = state;

  const handleSearch = (params: any) => {
    dispatch(actions.getWorkOrderList(params));
  };

  const handleReset = () => {
    dispatch(actions.clearWorkSearchParams());
    dispatch(actions.clearWorkData());
  };

  const pageChange = (pageNum: any) => {
    dispatch(actions.getWorkOrderList(searchParams, pageNum));
  };

  return (
    <>
      <NaviBar />
      <SearchForm
        searchParams={searchParams}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <List
        x={1600}
        rowKey="orderNo"
        column={columns}
        data={list}
        loading={loading}
        pagination={pagination}
        pageChange={pageChange}
      />
    </>
  );
}

export default OrderList;
