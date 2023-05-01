import React from "react";
import { Page, div, View, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "rgb(255,255,255)",
    paddingTop: 20,
    paddingBottom: 20,
    // marginBottom: "50px",
    // transform: "translateY(-50px)"
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1
  },
});
const MyDocument = ({ data }) => {
  // console.log(data);
  return (
    // <Document>
    //   <Page size="A4"style={styles.page} id="report">
    //     <View className="flex p-10 m-10"style={styles.section}>
    <div className="flex flex-col w-full pt-10 pb-10 pl-10 space-y-4">
      <div className="font-medium text-md text-gray-950">
        <p>1 Tên và mã học phần: {data && `${data.name} - ${data.id}`}</p>
      </div>
      <div className="font-medium text-md text-gray-950">2 Số tín chỉ</div>
      <div className="flex pl-4 space-x-16 text-sm text-gray-500">
        <p>Tổng số tín chỉ: {data && data.totalCredits}</p>
        <p>Lý thuyết: {data && data.theoryCredits}</p>
        <p>Thực hành: {data && data.practiceCredits}</p>
        <p>Tự học: {data && data.selfLearningCredits}</p>
      </div>

      <div className="font-medium text-md text-gray-950">
        <p>3 Giảng viên phụ trách</p>
      </div>
      <div className="flex flex-col justify-between text-sm text-gray-500 ">
        {data &&
          data.teachers.split("\n").map((t, idx) => <div key={idx}>{t}</div>)}
      </div>
      <div className="font-medium text-md text-gray-950">
        <p>4 Tài liệu học tập</p>
      </div>
      <div className="flex flex-col justify-between text-sm text-gray-500 ">
        {data &&
          data.documents.split("\n").map((d, idx) => <div key={idx}>{d}</div>)}
      </div>
      <div className="font-medium text-md text-gray-950">
        <p>5 Thông tin học phần</p>
      </div>
      <div className="text-sm italic text-gray-600">
        <p className="pl-10">a. Mục tiêu học phần</p>
      </div>
      <div className="flex flex-col justify-between text-sm text-gray-500 ">
        <p className="pl-10">
          Sau khi học xong môn học, sinh viên có khả năng:
        </p>
        <div className="flex flex-col pl-10">
          {data &&
            data.goals.split("\n").map((g, idx) => <div key={idx}>- {g}</div>)}
        </div>
      </div>
      <div className="text-sm italic text-gray-600">
        <p className="pl-10">b. Mô tả vắn tắt học phần</p>
      </div>
      <div className="pl-10 text-sm text-gray-500">
        <p>{data && data.abstract}</p>
      </div>
      <div className="text-sm italic text-gray-600">
        <p className="pl-10">
          c. Học phần học trước (A), tiên quyết (B), song hành (C)
        </p>
      </div>
      <div className="flex flex-col pl-10 text-sm text-gray-500">
        <p>Học phần trước: {data && data.a}</p>
        <p>Học phần tiên quyết: {data && data.b}</p>
        <p>Học phần song hành: {data && data.c}</p>
      </div>
      <div className="pl-10 text-sm italic text-gray-600">d. Yêu cầu khác</div>
      <div className="flex flex-col text-sm text-gray-500 ">
        <div>{data && data.other}</div>
      </div>
      <div className="font-medium text-md text-gray-950 ">
        <p>6 Chuẩn đầu ra của học phần</p>
      </div>
      {/* <div className="flex flex-col text-sm text-gray-500"> */}
      <div>
        <p>Khi hoàn thành học phần, người học có khả năng:</p>
      </div>
      <div className="relative">
        <table className="items-center w-full text-sm border border-gray-400">
          <thead className="border border-gray-400 ">
            <tr className="h-14">
              <th scope="col" className="px-1 border border-gray-400 ">
                CLOs
              </th>
              <th
                scope="col"
                className="relative pl-2 pr-40 border border-gray-400"
              >
                Chuẩn đầu ra của học phần
              </th>

              <th scope="col " className="pl-2 border border-gray-400">
                SO/PI
              </th>
            </tr>
          </thead>
          <tbody className="text-sm border border-gray-400">
            {data ? (
              data.subjectOutputStandards.map((so) => {
                return (
                  <tr key={so.id} className="border border-gray-400 h-14">
                    <th
                      scope="row"
                      className="w-10 font-medium border border-gray-400 "
                    >
                      {so.clo}
                    </th>
                    <td className="pl-2 border relative w-[800px] border-gray-400 break-all">
                      {so.content}
                    </td>

                    <td className="flex items-center pl-2 space-x-3">
                      {so.soPerPi}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border border-gray-400 h-14">
                <th
                  scope="row"
                  className="w-10 font-medium border border-gray-400 "
                >
                  1
                </th>
                <td className="pl-2 border relative w-[800px] border-gray-400 break-all"></td>

                <td className="flex items-center pl-2 space-x-3"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pt-4">
        <p>
          Ma trận tích hợp giữa chuẩn đầu ra của học phần và chuẩn đàu ra của
          chương trình đào tạo
        </p>
      </div>

      <div className="relative">
        <table className="w-full text-sm border border-gray-400">
          <thead className="border border-gray-400">
            <tr className="h-14">
              <th scope="col" className="px-1 border border-gray-400 ">
                CLOs
              </th>

              <th scope="col " className="pl-2 border border-gray-400">
                A
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                B
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                C
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                D
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                E
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                F
              </th>
              <th scope="col " className="pl-2 border border-gray-400">
                G
              </th>
            </tr>
          </thead>
          <tbody className="text-sm border border-gray-400">
            <tr className="border border-gray-400 h-14">
              <th
                scope="row"
                className="w-10 font-medium border border-gray-400"
              >
                1
              </th>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
              <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-4 italic">I (Introduced)</div>
      <div className="italic">R (Eeinforced/practiced)</div>
      <div className="italic">E (Emphasize)</div>

      <div className="font-medium text-md text-gray-950">
        <p>7 Nội dung học phần và kế hoạch giảng dạy</p>
      </div>

      <div className="flex flex-col text-sm text-gray-500">
        <div className="relative">
          <table className="w-full text-sm border border-gray-400">
            <thead className="border border-gray-400">
              <tr className="h-14">
                <th scope="col" className="px-1 border border-gray-400 ">
                  STT
                </th>

                <th scope="col " className="pl-2 border border-gray-400">
                  Nội dung giảng dạy
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Số tiết
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  CLOs
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Phương pháp dạy
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Nội dung và hướng dẫn tự học
                </th>
              </tr>
            </thead>
            <tbody className="text-sm border border-gray-400 ">
              {data ? (
                data.subjectContents.map((sc) => (
                  <tr key={sc.id} className="border border-gray-400 h-14">
                    <th
                      scope="row"
                      className="w-10 font-medium border border-gray-400"
                    >
                      {sc.order}
                    </th>
                    <td className="relative pl-2 break-all border border-gray-400 w-96">
                      {sc.content}
                    </td>
                    <td className="relative pl-2 break-all border border-gray-400 w-28">
                      {sc.nLessons}
                    </td>
                    <td className="relative w-24 pl-2 break-all border border-gray-400">
                      {sc.clos}
                    </td>
                    <td className="relative w-48 pl-2 break-all border border-gray-400">
                      {sc.method}
                    </td>
                    <td className="relative pl-2 break-all border border-gray-400 w-72">
                      {sc.bonus}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border border-gray-400 h-14">
                  <th
                    scope="row"
                    className="w-10 font-medium border border-gray-400"
                  >
                    1
                  </th>
                  <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                  <td className="relative pl-2 break-all border border-gray-400 w-28"></td>
                  <td className="relative w-24 pl-2 break-all border border-gray-400"></td>
                  <td className="relative w-48 pl-2 break-all border border-gray-400"></td>
                  <td className="relative pl-2 break-all border border-gray-400 w-72"></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pt-4 italic">
          <p>
            <b>L</b>: <b>L</b>ecture <b>P</b>: <b>P</b>
            ractices <b>WA</b>: <b>W</b>ork <b>A</b>
            ssignment,
          </p>
        </div>
      </div>
      <div className="font-medium text-md text-gray-950">
        <p>8 Phương pháp đánh giá</p>
      </div>
      <div className="text-sm italic text-gray-600">
        <p>a. Phương pháp đánh giá các chuẩn đầu ra học phần</p>
      </div>

      <div className="flex flex-col text-sm text-gray-500">
        <div className="relative">
          <table className="w-full text-sm border border-gray-400">
            <thead className="border border-gray-400">
              <tr className="h-14">
                <th scope="col" className="px-1 border border-gray-400 ">
                  CLOs
                </th>

                <th scope="col " className="pl-2 border border-gray-400">
                  Bài kiểm tra
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Phương pháp đánh giá
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Tỉ trọng
                </th>
                <th scope="col " className="pl-2 border border-gray-400">
                  Chỉ tiêu
                </th>
              </tr>
            </thead>
            <tbody className="text-sm border border-gray-400 ">
              {data ? (
                data.evaluates.map((e) => (
                  <tr key={e.id} className="border border-gray-400 h-14">
                    <th
                      scope="row"
                      className="w-10 font-medium border border-gray-400"
                    >
                      {e.clo}
                    </th>
                    <td className="relative pl-2 break-all border border-gray-400 w-96">
                      {e.test}
                    </td>
                    <td className="relative pl-2 break-all border border-gray-400 w-96">
                      {e.method}
                    </td>
                    <td className="relative w-32 pl-2 break-all border border-gray-400">
                      {e.proportion}%
                    </td>
                    <td className="relative w-32 pl-2 break-all border border-gray-400">
                      {e.target}%
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border border-gray-400 h-14">
                  <th
                    scope="row"
                    className="w-10 font-medium border border-gray-400"
                  >
                    1
                  </th>
                  <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                  <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                  <td className="relative w-32 pl-2 break-all border border-gray-400"></td>
                  <td className="relative w-32 pl-2 break-all border border-gray-400"></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-sm italic text-gray-600">
        b Các thành phần đánh giá
      </div>
      <div className="flex flex-col text-sm text-gray-500">
        <div className="relative">
          <table className="w-full text-sm border border-gray-400">
            <thead className="border border-gray-400">
              <tr className="h-14">
                <th scope="col" className="px-1 border border-gray-400 ">
                  Phương pháp
                </th>

                <th scope="col " className="pl-2 border border-gray-400">
                  Phương pháp đánh giá
                </th>

                <th scope="col " className="pl-2 border border-gray-400">
                  Tỉ trọng
                </th>
              </tr>
            </thead>
            <tbody className="text-sm border border-gray-400 ">
              {data ? (
                data.evalElements.map((ee) => (
                  <tr key={ee.id} className="border border-gray-400 h-14">
                    <th
                      scope="row"
                      className="font-medium border border-gray-400 "
                    >
                      {ee.name}
                    </th>
                    <td className="relative pl-2 break-all border border-gray-400 w-96">
                      {ee.method}
                    </td>
                    <td className="relative w-24 pl-2 break-all border border-gray-400">
                      {ee.proportion}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border border-gray-400 h-14">
                  <th
                    scope="row"
                    className="font-medium border border-gray-400 "
                  >
                    1
                  </th>
                  <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                  <td className="relative w-24 pl-2 break-all border border-gray-400"></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-sm italic text-gray-600">c Thang điểm đánh giá:</div>

      <div className="pt-8 text-sm font-bold text-gray-600">
        Ngày biên soạn/ cập nhật:
      </div>
      <div className="pt-8 pl-8 text-sm font-bold text-gray-600">
        Trưởng bộ môn
      </div>
    </div>
    //     </View>
    //   </Page>
    // </Document>
  );
};

export default MyDocument;
