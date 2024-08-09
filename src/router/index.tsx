// import React, { Component } from 'react'
// import { createBrowserRouter } from 'react-router-dom';

// enum RoutePath {
//     root = '/', // ~dashboard
//     categories = '/categories'
// }
// const AppRouter = () => {
//     const router = React.useMemo(
//         () =>
//           createBrowserRouter([
//             {
//               element: (
//                 <MainLayout
//                   Overview={overviewSection}
//                   Header={<HeaderLayout />}
//                   Sider={<SiderLayout />}
//                   Footer={<FooterLayout />}
//                   fullContent
//                 />
//               ),
//               children: [
//                 {
//                   path: RoutePath.root,
//                   loader: verifyUser,
//                   element: (
//                     <React.Suspense fallback={<Spin />}>
//                       <HomeLazy changeOverview={(value: React.ReactNode) => changeOverviewWithEachSection(value)} />
//                     </React.Suspense>
//                   ),
//                 },
//                 {
//                   path: RoutePath.projects,
//                   loader: verifyUser,
//                   element: (
//                     <React.Suspense fallback={<Spin />}>
//                       <ProjectsPage changeOverview={(value: React.ReactNode) => changeOverviewWithEachSection(value)} />
//                     </React.Suspense>
//                   ),
//                 },
                
//               ],
//             },
//             {
//               path: RoutePath.sentEmail,
//               loader: unVerifyUser,
//               element: (
//                 <React.Suspense fallback={<Spin />}>
//                   <SentEmailSectionLazy />
//                 </React.Suspense>
//               ),
//             },
//           ]),
//         [!!myProfile, overviewSection],
//       );
//       return <RouterProvider router={router} />;
// }

// export default AppRouter;