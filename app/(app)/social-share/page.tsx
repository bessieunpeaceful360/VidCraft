import React from 'react'

const SocialShare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Social Media Sharing</h1>
          <p className="text-gray-600 text-lg">Share your content across multiple platforms with optimized formats</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Select Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'YouTube', color: 'bg-red-500', icon: '📺' },
              { name: 'Instagram', color: 'bg-pink-500', icon: '📷' },
              { name: 'TikTok', color: 'bg-black', icon: '🎵' },
              { name: 'Twitter/X', color: 'bg-blue-500', icon: '🐦' },
              { name: 'LinkedIn', color: 'bg-blue-700', icon: '💼' },
              { name: 'Facebook', color: 'bg-blue-600', icon: '👥' },
              { name: 'Discord', color: 'bg-indigo-600', icon: '🎮' },
              { name: 'Twitch', color: 'bg-purple-600', icon: '🎬' }
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
                <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white text-xl mb-2`}>
                  {platform.icon}
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Content Preview</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">No content selected. Upload a video to preview platform-specific formats.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Select Content
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialShare