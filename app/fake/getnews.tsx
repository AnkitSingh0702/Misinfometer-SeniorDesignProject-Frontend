"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { toast } from 'sonner';
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

