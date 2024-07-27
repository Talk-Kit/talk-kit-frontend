import TalkKitLogo from "../../components/LOGO";
import SignUpProgress from "./_components/SignUpProgress";
import SignUpContainer from "./_container/sign-up";
import { TERMS_TEXT } from "./_constants/constants";

export default function SignUp_Terms() {
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress
        text={TERMS_TEXT[0]}
        num={1}
        isStep2={false}
        isStep3={false}
      />

      <SignUpContainer />
    </div>
  );
}
