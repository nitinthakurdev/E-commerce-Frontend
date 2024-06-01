
import PaymentCancel from "../features/users/components/CancelPage";
import PaymentSuccess from "../features/users/components/SuccessPage";
import CartPage from "../features/users/pages/cartpage";

export const UserRoute = [
    {
        path:"/cart",
        element:<CartPage/>
    },
    {
        path:"/cancel",
        element:<PaymentCancel/>
    },
    {
        path:"/success",
        element:<PaymentSuccess/>
    },
]
