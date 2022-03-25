import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'update-project' message
 * Contains sample of project
 */
export interface UpdateProjectResponsePayload {
    /**
     * Response sample
     */
    project?: Project | null;
}

/**
 * Describes the response of updating project
 */
export default interface UpdateProjectResponse extends ResponseMessage<UpdateProjectResponsePayload> { }
