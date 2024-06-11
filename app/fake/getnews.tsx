// "use client"

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// // import { useToast } from "@/components/ui/use-toast";
// import axios from "axios";
// import React, { ChangeEvent, useState } from "react";
// import { Toaster, toast } from 'sonner'
// export default function GetNews() {
//     const [news, setNews] = useState<string>("");
//     // const { toast } = useToast()

//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setNews(e.target.value);
//     };

//     const handleCheck = async () => {
//         if (!news.trim()) {
//             toast({
                
//                 variant: "destructive",
//                 title: "Please enter the news",
//                 description: "The input field cannot be empty.",
//             });
//             return;
//         }
//         try {
//             const response = await axios.post("https://flask-server-fj3h.onrender.com/", {
//                 text: news,
//             });
//             toast({
                
//                 variant: response.data.prediction === "REAL" ? "success" : "destructive",
//                 title: `This news is ${response.data.prediction === "REAL" ? "REAL" : "FAKE"}`,
//                 description: response.data.prediction
//             })
//         } catch (error) {
//             toast({
//                 variant: "destructive",
//                 title: "Uh oh! Something went wrong.",
//                 description: "There was a problem with your request.",
//             })
//         }
//     };
//     return (
//         <>
//             <Card className="w-full max-w-screen-sm">
//                 <CardHeader>
//                     <CardTitle>
//                         Display News
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex gap-4 justify-center items-center p-4">
//                     <Input
//                         className="h-12"
//                         value={news}
//                         onChange={handleInputChange}
//                         placeholder="Enter the News..."
//                     />
//                     <Button
//                         className="h-12"
//                         variant="gradient"
//                         onClick={handleCheck}
//                     >
//                         Check
//                     </Button>
//                 </CardContent>
//             </Card>
//         </>
//     );
// }





// "use client"

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import React, { ChangeEvent, useState } from "react";
// import { toast } from 'sonner';
// import { Toaster } from '@/components/ui/sonner';
// import { Skeleton } from "@/components/ui/skeleton"
// import { PropagateLoader } from "react-spinners";


// export default function GetNews() {
//     const [news, setNews] = useState<string>("");
//     const [loading , setLoading] = useState<Boolean>(false);

//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setNews(e.target.value);
//     };

//     const handleCheck = async () => {
//         if (!news.trim()) {
//             toast.error("Please enter the news. The input field cannot be empty.");
//             return;
//         }
//         try {
//             const response = await axios.post("https://flask-server-fj3h.onrender.com/", {
//                 text: news,
//             });
//             if (response.data.prediction === "REAL") {
//                 toast.success(`This news is REAL: ${response.data.prediction}`);
                
//             } else {
//                 toast.error(`This news is FAKE: ${response.data.prediction}`);
               

//             }
//         } catch (error) {
//             setLoading(false);
//             toast.error("Uh oh! Something went wrong. There was a problem with your request.");
//         }
//     };

//     return (
//         <>
          

//             <Card className="w-full max-w-screen-sm">
//                 <CardHeader>
//                     <CardTitle>
//                     Check for Misinformation 
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex gap-4 justify-center items-center p-4">
//                     <Input
//                         required
//                         className="h-12 outline-none p-4 w-full "
//                         value={news}
//                         onChange={handleInputChange}
//                         placeholder="Enter the News..."
//                     />
//                     <Button
//                         className="className=' h-12 flex w-full md:w-1/3 justify-center items-center bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b] px-4 py-2 rounded-lg  ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold'"
//                         variant="gradient"
//                         onClick={handleCheck}
//                     >
//                         {loading ? (
//                             <PropagateLoader color="#0b695b" size={20} />
//                         ) : (
//                             "Check"
//                         )}
//                     </Button>
//                 </CardContent>
//             </Card>
//         </>
//     );
// }


"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Skeleton } from "@/components/ui/skeleton";
import { BeatLoader} from "react-spinners";

export default function GetNews() {
    const [news, setNews] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNews(e.target.value);
    };

    const handleCheck = async () => {
        if (!news.trim()) {
            toast.error("Please enter the news. The input field cannot be empty.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("https://flask-server-fj3h.onrender.com/", {
                text: news,
            });
            setLoading(false);
            if (response.data.prediction === "REAL") {
                toast.success(`This news is REAL: ${response.data.prediction}`);
            } else {
                toast.error(`This news is FAKE: ${response.data.prediction}`);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Uh oh! Something went wrong. There was a problem with your request.");
        }
    };

    return (
        <>
            <Toaster />
            <Card className="w-full max-w-screen-sm">
                <CardHeader>
                    <CardTitle>
                        Check for Misinformation 
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4 justify-center items-center p-4">
                    <Input
                        required
                        className="h-12 outline-none p-4 w-full"
                        value={news}
                        onChange={handleInputChange}
                        placeholder="Enter the News..."
                    />
                    <Button
                        className="h-12 flex w-full md:w-1/3 justify-center items-center bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b] px-4 py-2 rounded-lg ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold"
                        variant="gradient"
                        onClick={handleCheck}
                        disabled={loading}
                    >
                        {loading ? (
                            <BeatLoader
                            size={10} color="white" />
                        ) : (
                            "Check"
                        )}
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}

