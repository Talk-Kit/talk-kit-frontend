import SignUpProgress from "../_components/SignUpProgress";
import TalkKitLogo from "../../../components/LOGO";
import { DETAIL_TEXT } from "../_constants/constants";
import DetailContainer from "../_container/detail";

export default function SignUp_Detail() {
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress
        text={DETAIL_TEXT[0]}
        num={3}
        isStep2={true}
        isStep3={true}
      />

      <DetailContainer />
    </div>
  );
}
