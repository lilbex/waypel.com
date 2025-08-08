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
          <li><strong>Read Media Images (android.permission.READ_MEDIA_IMAGES):</strong> To access and select photos from your device gallery for profile pictures and content sharing</li>
          <li><strong>Read Media Video (android.permission.READ_MEDIA_VIDEO):</strong> To access and select videos from your device gallery for uploading and sharing</li>
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
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Safety Standards</h2>
        <p className="mb-4">WayPel is committed to providing a safe environment for all users:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>We prohibit harassment, bullying, and inappropriate content</li>
          <li>Users can report and block other users</li>
          <li>We moderate content and remove violations</li>
          <li>Personal information is protected and not shared without consent</li>
          <li>We verify user accounts to prevent fake profiles</li>
        </ul>
        <p className="mb-4">To report safety concerns or violations, contact us immediately at: safety@waypel.com</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibent mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Support:</strong> support@waypel.com</p>
        <p className="mb-2"><strong>Safety Reports:</strong> safety@waypel.com</p>
        <p className="mb-2"><strong>Business Inquiries:</strong> business@waypel.com</p>
        <p>If you have questions about this privacy policy or our safety standards, contact us using the information above.</p>
      </section>
    </div>
  );
}