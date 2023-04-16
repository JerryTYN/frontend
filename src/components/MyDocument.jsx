import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" className="bg-stone-50">
        <View className="flex p-10 m-10">
          <div className="flex flex-col w-full space-y-4">
            <Text className="text-xl font-medium text-gray-950">
              1 Tên và mã học phần:{" "}
            </Text>
            <Text className="text-xl font-medium text-gray-950">
              2 Số tín chỉ
            </Text>
            <div className="flex pl-4 space-x-16 text-sm text-gray-500">
              <Text>Tổng số tín chỉ: </Text>
              <Text>Lý thuyết: </Text>
              <Text>Thực hành: </Text>
              <Text>Tự học: </Text>
            </div>

            <Text className="text-xl font-medium text-gray-950">
              3 Giảng viên phụ trách
            </Text>
            <div className="flex flex-col justify-between text-sm text-gray-500 ">
              <Text>Giảng viên a</Text>
              <Text>Giảng viên a</Text>
              <Text>Giảng viên a</Text>
              <Text>Giảng viên a</Text>
              <Text>Giảng viên a</Text>
            </div>
            <Text className="text-xl font-medium text-gray-950">
              4 Tài liệu học tập
            </Text>
            <div className="flex flex-col justify-between text-sm text-gray-500 ">
              <Text>Tài liệu</Text>
              <Text>Tài liệu</Text>
              <Text>Tài liệu</Text>
              <Text>Tài liệu</Text>
              <Text>Tài liệu</Text>
            </div>
            <Text className="text-xl font-medium text-gray-950">
              5 Thông tin học phần
            </Text>
            <Text className="italic text-gray-600 text-md">
              a Mục tiêu học phần
            </Text>
            <div className="flex flex-col justify-between text-sm text-gray-500 ">
              <Text>Sau khi học xong môn học, sinh viên có khả năng:</Text>
              <div className="flex flex-col pl-4">
                <Text>- Khả năng 1</Text>
                <Text>- Khả năng 1</Text>
                <Text>- Khả năng 1</Text>
                <Text>- Khả năng 1</Text>
              </div>
            </div>
            <Text className="italic text-gray-600 text-md">
              b Mô tả vắn tắt học phần
            </Text>
            <div className="text-sm text-gray-500">
              <Text>Mô tả vắn tắt...</Text>
            </div>
            <Text className="italic text-gray-600 text-md">
              c Học phần học trước (A), tiên quyết (B), song hành (C)
            </Text>
            <div className="flex flex-col text-sm text-gray-500">
              <Text>Học phần trước: </Text>
              <Text>Học phần tiên quyết: </Text>
              <Text>Học phần song hành: </Text>
            </div>
            <Text className="italic text-gray-600 text-md">d Yêu cầu khác</Text>
            <div className="flex flex-col text-sm text-gray-500">
              <Text>Yêu cầu khác</Text>
            </div>
            <Text className="text-xl font-medium text-gray-950">
              6 Chuẩn đầu ra của học phần
            </Text>
            <div className="flex flex-col text-sm text-gray-500">
              <Text>Khi hoàn thành học phần, người học có khả năng:</Text>
              <Text className="relative">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
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
                    <tr className="border border-gray-400">
                      <th
                        scope="row"
                        className="w-10 font-medium border border-gray-400 "
                      >
                        1
                      </th>
                      <td className="pl-2 border relative w-[800px] border-gray-400 break-all">
                        Đây là chuẩn đầu ra
                      </td>

                      <td className="flex items-center pl-2 space-x-3">a2</td>
                    </tr>
                  </tbody>
                </table>
              </Text>
              <Text className="pt-4">
                Ma trận tích hợp giữa chuẩn đầu ra của học phần và chuẩn đàu ra
                của chương trình đào tạo
              </Text>

              <Text className="relative">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
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
                    <tr className="border border-gray-400">
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
                    <tr className="border border-gray-400">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        2
                      </th>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                    </tr>
                    <tr className="border border-gray-400">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        3
                      </th>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                      <td className="relative w-16 pl-2 break-all border border-gray-400"></td>
                    </tr>
                    <tr className="border border-gray-400">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        4
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
              </Text>
              <Text className="pt-4 italic">I (Introduced)</Text>
              <Text className="italic">R (Eeinforced/practiced)</Text>
              <Text className="italic">E (Emphasize)</Text>
            </div>
            <Text className="text-xl font-medium text-gray-950">
              7 Nội dung học phần và kế hoạch giảng dạy
            </Text>

            <div className="flex flex-col text-sm text-gray-500">
              <Text className="relative">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
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
                    <tr className="border border-gray-400 ">
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
                  </tbody>
                </table>
              </Text>
              <Text className="pt-4 italic">
                <p>
                  <b>L</b>: <b>L</b>ecture <b>P</b>: <b>P</b>ractices <b>WA</b>:{" "}
                  <b>W</b>ork <b>A</b>ssignment,
                </p>
              </Text>
            </div>
            <Text className="text-xl font-medium text-gray-950">
              8 Phương pháp đánh giá
            </Text>
            <Text className="italic text-gray-600 text-md">
              a Phương pháp đánh giá các chuẩn đầu ra học phần
            </Text>

            <div className="flex flex-col text-sm text-gray-500">
              <Text className="relative">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
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
                    </tr>
                  </thead>
                  <tbody className="text-sm border border-gray-400 ">
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="w-10 font-medium border border-gray-400"
                      >
                        1
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-32 pl-2 break-all border border-gray-400"></td>
                    </tr>
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        2
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-32 pl-2 break-all border border-gray-400"></td>
                    </tr>
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        3
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-32 pl-2 break-all border border-gray-400"></td>
                    </tr>
                  </tbody>
                </table>
              </Text>
            </div>
            <Text className="italic text-gray-600 text-md">
              b Các thành phần đánh giá
            </Text>
            <div className="flex flex-col text-sm text-gray-500">
              <Text className="relative">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
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
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        1
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-24 pl-2 break-all border border-gray-400"></td>
                      
                    </tr>
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        2
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-24 pl-2 break-all border border-gray-400"></td>
                      
                    </tr>
                    <tr className="border border-gray-400 ">
                      <th
                        scope="row"
                        className="font-medium border border-gray-400 "
                      >
                        3
                      </th>
                      <td className="relative pl-2 break-all border border-gray-400 w-96"></td>
                      <td className="relative w-24 pl-2 break-all border border-gray-400"></td>
                     
                    </tr>
                  </tbody>
                </table>
              </Text>
            </div>
            <Text className="italic text-gray-600 text-md">
              c Thang điểm đánh giá:
            </Text>

            <Text className="pt-8 font-bold text-gray-600 text-md">
              Ngày biên soạn/ cập nhật:
            </Text>
            <Text className="pt-8 pl-8 font-bold text-gray-600 text-md">
              Trưởng bộ môn
            </Text>
          </div>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
