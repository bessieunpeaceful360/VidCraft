import React from 'react'

const VideoUpload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Video Upload & Processing</h1>
          <p className="text-gray-600 text-lg">Upload your videos and optimize them for different platforms with AI-powered compression</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Upload Video</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Drop your video here</h3>
            <p className="text-gray-600 mb-4">or click to browse files</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Choose Files
            </button>
            <p className="text-xs text-gray-500 mt-4">Supported formats: MP4, MOV, AVI, WebM (Max 500MB)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Processing Options</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" id="compress" className="mr-3" />
                <label htmlFor="compress" className="text-gray-700">Smart Compression</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="watermark" className="mr-3" />
                <label htmlFor="watermark" className="text-gray-700">Add Watermark</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="subtitles" className="mr-3" />
                <label htmlFor="subtitles" className="text-gray-700">Auto-Generate Subtitles</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="thumbnail" className="mr-3" />
                <label htmlFor="thumbnail" className="text-gray-700">Create Thumbnails</label>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Output Formats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">YouTube (1080p)</span>
                <span className="text-green-600"></span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Instagram Stories (9:16)</span>
                <span className="text-green-600"></span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">TikTok (9:16)</span>
                <span className="text-green-600"></span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Twitter/X (16:9)</span>
                <span className="text-green-600"></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Upload History</h3>
          <div className="text-center py-8 text-gray-500">
            No uploads yet. Start by uploading your first video!
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoUpload