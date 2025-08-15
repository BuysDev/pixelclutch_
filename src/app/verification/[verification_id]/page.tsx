'use server'
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function EmailVerification({ params }: { params: Promise<{ verificationId: string }> }) {
    try {
        const emailVerificationId = (await params).verificationId;

        const user = await prisma.user.findUnique({
            where: {
                verificationId: emailVerificationId
            }
        });

        if (!user) {
            return redirect('/verification/invalid-token');
        }

        if (user.isVerified) {
            return redirect('/verification/already-verified');
        }

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                isVerified: true,
                verifiedAt: new Date(), // Registrar quando foi verificado
                verificationId: null
            }
        });

        return redirect('/verification/success');

    } catch (error) {
        console.error('Verification error:', error);
        return redirect('/verification/error');
    }
}