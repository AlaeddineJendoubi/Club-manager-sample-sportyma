import { addClubAction } from "../../actions/clubs-action";
import { clubLogosMapping } from "../../utils/mappings";

/**
 * Returns the selected logo id from the logos mapping
 * @param  index The selected item index
 * @returns an integer that represents the logo id from the mapping
 */
const getLogoIdFromSelectedItem = (index) => {
  return clubLogosMapping[index?.row + 1]?.id;
};

/**
 * Submits the form by creating a new club and updating the Clubs state
 * @param  newClub new Club object without the logo
 * @param  logoIndex selected new club logo
 * @param  seasonIndex selected season
 * @param  dispatch redux useDispatch() to trigger action
 * @returns an image componenet with the inputed source
 */
export const submitNewClubForm = (
  newClub,
  logoIndex,
  seasonIndex,
  dispatch
) => {
  const logoId = getLogoIdFromSelectedItem(logoIndex);
  if (newClub?.name === "" || newClub?.country === "") {
    alert("PLEASE FILL ALL FIELDS");
  } else {
    dispatch(
      addClubAction({ ...newClub, logo: logoId, season: { id: seasonIndex } })
    );
    alert("Successfully added club");
  }
};
