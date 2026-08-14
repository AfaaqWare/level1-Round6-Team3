import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { profileDataApi , type ProfileDataResponse} from "../api/getProfileDataAPI";


export function useGetProfileData(){
return useApiQuery<ProfileDataResponse>({
    queryKey:["profileData"],
    queryFn: profileDataApi
})
}