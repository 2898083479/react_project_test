"use client";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPost(id: string) {
    try {

    } catch (error) {
        console.log(error);
    }
    revalidatePath("/posts");
    redirect(`/posts/${id}`);
}
