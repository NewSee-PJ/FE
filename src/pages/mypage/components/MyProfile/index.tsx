import * as S from "./index.styles";
import { useUserStore } from "@/stores/user";
import { LevelTag } from "@/components/common/LevelTag";
import ProfileDefaultImage from "@assets/images/profileImage.png";
import { formatDateToDot } from "@/utils/format";
import { useMyProfile } from "@/api/user/hooks/useMyProfile";
import { useWordsStore } from "@/stores/words";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
  const navigate = useNavigate();
  useMyProfile();
  const name = useUserStore((state) => state.name);
  const profileImage = useUserStore((state) => state.profileImage);
  const joinDate = useUserStore((state) => state.joinDate);
  const savedWordCount = useWordsStore((state) => state.wordCount);

  return (
    <S.ProfileCard>
      <S.Profile>
        <S.ProfileImage
          src={profileImage ? profileImage : ProfileDefaultImage}
          alt="프로필 이미지"
        />
        <S.UserInfo>
          <S.Name>{name}</S.Name>
          <S.JoinInfo>
            <LevelTag showLabel={false} />
            <S.JoinDate>
              {joinDate ? `${formatDateToDot(new Date(joinDate))} 가입` : ""}
            </S.JoinDate>
          </S.JoinInfo>
        </S.UserInfo>
        <S.WordInfo>
          <S.WordCount>{savedWordCount}</S.WordCount>
          <S.WordLabel>저장된 단어</S.WordLabel>
        </S.WordInfo>
      </S.Profile>
      <S.EditButton onClick={() => navigate("profileEdit")}>
        프로필 수정
      </S.EditButton>
    </S.ProfileCard>
  );
};
