import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { AdPage } from "../pages/AdPage";
import { RequireAuth } from "../helpers/RequireAuth";
import { AddAd } from "../pages/AddAd";
import { Ads } from '../pages/Ads';
import { MyAccount } from "../pages/MyAccount";


export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<RequireAuth><About /></RequireAuth>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/ads/:id" element={<AdPage />} />
                <Route path="/post-an-ad" element={<RequireAuth><AddAd /></RequireAuth>} />
                <Route path="/ads" element={<Ads />} />
                <Route path="/my-account" element={<RequireAuth><MyAccount /></RequireAuth>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
        
    )
}