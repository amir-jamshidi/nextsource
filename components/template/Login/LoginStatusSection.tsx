import { NewReleases, VerifiedRounded } from '@mui/icons-material'
import React from 'react'

const LoginStatusSection = ({ isShowVerify }: { isShowVerify: boolean }) => {
    return (
        <div className="mb-4 flex w-60 items-center">
            <div className="flex flex-col items-center relative">
                <div className={`w-16 h-16 rounded-full bg-blue flex flex-center border border-amber-500/50`}>
                    <div className="w-14 h-14 rounded-full bg-blue flex-center">
                        <span className="font-dana-bold text-lg text-gray-300">2</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    کد تایید
                </p>
                <span className="absolute left-0 top-0">
                    <NewReleases className="text-amber-500" />
                </span>
            </div>
            <span className="flex-1 h-1 inline-block bg-blue rounded mb-4"></span>
            <div className={`transition-all flex flex-col items-center relative`}>
                <div className={`${!isShowVerify ? 'border-amber-500/50' : 'border-green-500/50'} border w-16 h-16 rounded-full bg-blue flex flex-center`}>
                    <div className="w-14 h-14 rounded-full bg-blue flex-center">
                        <span className="font-dana-bold text-lg text-gray-300">1</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    شماره
                </p>
                {isShowVerify ? (
                    <span className="absolute left-0 top-0">
                        <VerifiedRounded className="text-green-500" />
                    </span>
                ) : (
                    <span className="absolute left-0 top-0">
                        <NewReleases className="text-amber-500" />
                    </span>
                )}

            </div>
        </div>
    )
}

export default LoginStatusSection