import TalkKitLogo from "../../../_components/LOGO";
import SignUpProgress from "../_components/SignUpProgress";
import { EMAIL_TEXT } from "../_constants/constants";
import EmailContainer from "../_container/e-mail";

export default function SignUp_Email() {
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
      {/* 텍스트 */}
      <SignUpProgress
        text={EMAIL_TEXT[0]}
        num={2}
        isStep2={true}
        isStep3={false}
      />
      <span className="text-center text-sm">{EMAIL_TEXT[1]}</span>

      <EmailContainer />
    </div>
  );
}
