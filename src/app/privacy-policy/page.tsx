export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy for WayPel</h1>
      <p className="mb-6"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Camera and Media Permissions</h2>
        <p className="mb-4">WayPel requests the following permissions:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Camera (android.permission.CAMERA):</strong> To capture photos and videos for profile pictures and content creation</li>
          <li><strong>Media Library Access:</strong> To select and upload existing photos/videos</li>
          <li><strong>Storage Access:</strong> To save and manage media files</li>
        </ul>
        <p className="mb-4">Camera and media data is:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Only accessed with your explicit permission</li>
          <li>Used solely for app functionality (profile pictures, content sharing)</li>
          <li>Not shared with third parties without consent</li>
          <li>Stored securely on our servers</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p>We collect only the data necessary to provide our services. Any photos or videos taken through the app are processed according to your privacy settings.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have questions about this privacy policy, contact us at: support@waypel.com</p>
      </section>
    </div>
  );
}