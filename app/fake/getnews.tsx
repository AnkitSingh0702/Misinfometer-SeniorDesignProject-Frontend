"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import './toast.css';

export default function GetNews() {
    const [news, setNews] = useState<string>("");
    const { toast } = useToast()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNews(e.target.value);
    };

    const handleCheck = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/", {
                text: news,
            });
            toast({
                
                variant: response.data.prediction === "REAL" ? "success" : "destructive",
                title: `This news is ${response.data.prediction === "REAL" ? "REAL" : "FAKE"}`,
                description: response.data.prediction
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        }
    };
    return (
        <>
            <Card className="w-full max-w-screen-sm">
                <CardHeader>
                    <CardTitle>
                        Display News
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4 justify-center items-center p-4">
                    <Input
                        className="h-12"
                        value={news}
                        onChange={handleInputChange}
                        placeholder="Enter the News..."
                    />
                    <Button
                        className="h-12"
                        variant="gradient"
                        onClick={handleCheck}
                    >
                        Check
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
